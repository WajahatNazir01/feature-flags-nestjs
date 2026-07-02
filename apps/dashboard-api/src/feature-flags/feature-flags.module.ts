import { Module } from '@nestjs/common';
import { FeatureFlagsService } from './feature-flags.service';
import { FeatureFlagsController } from './feature-flags.controller';
import { PrismaService } from '../prisma.service';

@Module({
  providers: [FeatureFlagsService, PrismaService],
  controllers: [FeatureFlagsController],
})
export class FeatureFlagsModule {}
