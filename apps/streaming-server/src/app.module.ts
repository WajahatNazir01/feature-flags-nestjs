import { Module } from '@nestjs/common';
import { RedisService } from './redis.sevice';
import { StreamingGateway } from './streaming.gateway';

@Module({
  providers: [RedisService, StreamingGateway],
})
export class AppModule {}