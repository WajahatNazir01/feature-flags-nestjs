import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import Redis from 'ioredis';

@Injectable()
export class RedisService implements OnModuleInit, OnModuleDestroy {
  public subClient: Redis;

  onModuleInit() {
    this.subClient = new Redis({
      host: 'localhost',
      port: 6379,
    });

    this.subClient.on('connect', () => console.log('✅ Connected safely to Redis Pub/Sub'));
    this.subClient.on('error', (err) => console.error('❌ Redis Connection Error:', err));
  }

  onModuleDestroy() {
    this.subClient.disconnect();
  }
}