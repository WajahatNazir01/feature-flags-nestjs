import { OnGatewayConnection, OnGatewayDisconnect } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { RedisService } from './redis.sevice';
import { OnModuleInit } from '@nestjs/common';
export declare class StreamingGateway implements OnGatewayConnection, OnGatewayDisconnect, OnModuleInit {
    private readonly redisService;
    server: Server;
    constructor(redisService: RedisService);
    onModuleInit(): void;
    handleConnection(client: Socket): void;
    handleDisconnect(client: Socket): void;
}
