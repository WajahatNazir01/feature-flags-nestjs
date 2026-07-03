import { Injectable, ConflictException } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreateFeatureFlagDto } from './dto/create-flag.dto';
import { ToggleFlagDto } from './dto/toggle-flag.dto';
import * as crypto from 'crypto';
import Redis from 'ioredis';

const redisPub = new Redis({
  host: 'localhost',
  port: 6379,
});
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


  // async toggleFlagStatus(dto: ToggleFlagDto) {
  //   const { flagId, environmentId, isEnabled } = dto;
  //   const statusId = crypto.randomUUID();

  //   // 1. Check if status mapping exists
  //   const existingStatus: any[] = await (this.prisma as any).$queryRaw`
  //     SELECT * FROM "FlagStatus" 
  //     WHERE "flagId" = ${flagId} AND "environmentId" = ${environmentId}
  //   `;

  //   if (existingStatus && existingStatus.length > 0) {
  //     // 2. Record exists -> Only update the boolean state
  //     await (this.prisma as any).$executeRaw`
  //       UPDATE "FlagStatus" 
  //       SET "isEnabled" = ${isEnabled}
  //       WHERE "flagId" = ${flagId} AND "environmentId" = ${environmentId}
  //     `;
  //   } else {
  //     // 3. Fresh Record -> Only insert mandatory relation fields
  //     await (this.prisma as any).$executeRaw`
  //       INSERT INTO "FlagStatus" ("id", "flagId", "environmentId", "isEnabled")
  //       VALUES (${statusId}, ${flagId}, ${environmentId}, ${isEnabled})
  //     `;
  //   }

  //   return { flagId, environmentId, isEnabled };
  // }

  async toggleFlagStatus(dto: ToggleFlagDto) {
    const { flagId, environmentId, isEnabled } = dto;
    const statusId = crypto.randomUUID();

    // 1. Fetch the flag key and tenantId first so we know who to broadcast to
    const flagLookup: any[] = await (this.prisma as any).$queryRaw`
      SELECT "key", "tenantId" FROM "FeatureFlag" WHERE "id" = ${flagId}
    `;

    if (!flagLookup || flagLookup.length === 0) {
      throw new ConflictException(`Feature flag with ID '${flagId}' not found.`);
    }

    const flagKey = flagLookup[0].key;
    const tenantId = flagLookup[0].tenantId;

    // 2. Check if status mapping exists
    const existingStatus: any[] = await (this.prisma as any).$queryRaw`
      SELECT * FROM "FlagStatus" 
      WHERE "flagId" = ${flagId} AND "environmentId" = ${environmentId}
    `;

    if (existingStatus && existingStatus.length > 0) {
      // Record exists -> Run Update pipeline
      await (this.prisma as any).$executeRaw`
        UPDATE "FlagStatus" 
        SET "isEnabled" = ${isEnabled}
        WHERE "flagId" = ${flagId} AND "environmentId" = ${environmentId}
      `;
    } else {
      // Fresh Record -> Run Insert pipeline
      await (this.prisma as any).$executeRaw`
        INSERT INTO "FlagStatus" ("id", "flagId", "environmentId", "isEnabled")
        VALUES (${statusId}, ${flagId}, ${environmentId}, ${isEnabled})
      `;
    }

    // 3. 🚀 THE MAGIC HIGHWAY: Publish event to Redis for the streaming server
    await redisPub.publish(
      'feature-flag-updates',
      JSON.stringify({
        tenantId,
        key: flagKey,
        isEnabled,
      }),
    );

    console.log(`📣 Published flag update to Redis for channel: feature-flag-updates`);

    return { flagId, environmentId, isEnabled };
  }



  //service to evlaute any flag status
  async evaluateClientFlag(apiKey: string, key: string) {
    // 1. Raw join pipeline se find karo ke is apiKey aur key ka status kya hai
    const result: any[] = await (this.prisma as any).$queryRaw`
      SELECT s."isEnabled" 
      FROM "FlagStatus" s
      JOIN "FeatureFlag" f ON s."flagId" = f.id
      JOIN "Environment" e ON s."environmentId" = e.id
      WHERE e."apiKey" = ${apiKey} AND f."key" = ${key}
    `;

    // 2. Agar koi specific status configuration nahi mili, toh fallback default false return karo
    if (!result || result.length === 0) {
      return { key, isEnabled: false };
    }

    return {
      key,
      isEnabled: result[0].isEnabled,
    };
  }

}