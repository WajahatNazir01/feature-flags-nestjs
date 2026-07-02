import { Controller, Get, Post, Body } from '@nestjs/common';
import { FeatureFlagsService } from './feature-flags.service';

@Controller('feature-flags')
export class FeatureFlagsController {
  constructor(private readonly featureFlagsService: FeatureFlagsService) {}

  @Post()
  async create(@Body() body: { key: string; description?: string }) {
    return this.featureFlagsService.createFlag(body);
  }

  @Get()
  async findAll() {
    return this.featureFlagsService.getAllFlags();
  }
}