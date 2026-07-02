import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class FeatureFlagsService {
  constructor(private prisma: PrismaService) {}

  async createFlag(data: { key: string; description?: string }) {
    return this.prisma.featureFlag.create({
      data,
    });
  }

  async getAllFlags() {
    return this.prisma.featureFlag.findMany({
      include: {
        statuses: true,
      },
    });
  }
}