import { OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import Redis from 'ioredis';
export declare class RedisService implements OnModuleInit, OnModuleDestroy {
    subClient: Redis;
    onModuleInit(): void;
    onModuleDestroy(): void;
}
