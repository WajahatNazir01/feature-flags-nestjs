import { Controller, Post, Get, Body, Query } from '@nestjs/common';
import { FeatureFlagsService } from './feature-flags.service';
import { CreateFeatureFlagDto } from './dto/create-flag.dto';
import { ToggleFlagDto } from './dto/toggle-flag.dto';

@Controller('feature-flags')
export class FeatureFlagsController {
  constructor(private readonly featureFlagsService: FeatureFlagsService) {}

  @Post()
  create(@Body() createFeatureFlagDto: CreateFeatureFlagDto) {
    return this.featureFlagsService.createFlag(createFeatureFlagDto);
  }

  @Get()
  findAll(@Query('tenantId') tenantId: string) {
    return this.featureFlagsService.getTenantFlags(tenantId);
  }
  @Post('toggle')
  toggleStatus(@Body() toggleFlagDto: ToggleFlagDto) {
    return this.featureFlagsService.toggleFlagStatus(toggleFlagDto);
  }
}