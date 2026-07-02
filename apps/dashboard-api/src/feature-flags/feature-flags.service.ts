import { Injectable, ConflictException } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreateFeatureFlagDto } from './dto/create-flag.dto';
import * as crypto from 'crypto';

@Injectable()
export class FeatureFlagsService {
  constructor(private prisma: PrismaService) {}

  async createFlag(createFlagDto: CreateFeatureFlagDto) {
    const { key, description, tenantId } = createFlagDto;

    // 1. Prisma ke generic raw query pipeline se data find karo (No cached type issue)
    const existingFlags: any[] = await (this.prisma as any).$queryRaw`
      SELECT * FROM "FeatureFlag" 
      WHERE "key" = ${key} AND "tenantId" = ${tenantId}
    `;

    if (existingFlags && existingFlags.length > 0) {
      throw new ConflictException(`Flag key '${key}' already exists for this tenant.`);
    }

    const newId = crypto.randomUUID();

    // 2. Direct pure native raw insert pipeline
    await (this.prisma as any).$executeRaw`
      INSERT INTO "FeatureFlag" ("id", "key", "description", "tenantId", "createdAt")
      VALUES (${newId}, ${key}, ${description || null}, ${tenantId}, NOW())
    `;

    return {
      id: newId,
      key,
      description,
      tenantId,
    };
  }

  async getTenantFlags(tenantId: string) {
    // Direct raw select execution query
    return await (this.prisma as any).$queryRaw`
      SELECT * FROM "FeatureFlag" WHERE "tenantId" = ${tenantId}
    `;
  }
}