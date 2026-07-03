import { 
  WebSocketGateway, 
  WebSocketServer, 
  OnGatewayConnection, 
  OnGatewayDisconnect 
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { RedisService } from './redis.sevice';
import { Injectable, OnModuleInit } from '@nestjs/common';

@WebSocketGateway({ cors: { origin: '*' } })
@Injectable()
export class StreamingGateway implements OnGatewayConnection, OnGatewayDisconnect, OnModuleInit {
  @WebSocketServer() server: Server;

  constructor(private readonly redisService: RedisService) {}

  onModuleInit() {
    // Listen globally for events published to the channel
    this.redisService.subClient.subscribe('feature-flag-updates');
    
    this.redisService.subClient.on('message', (channel, message) => {
      if (channel === 'feature-flag-updates') {
        const parsedData = JSON.parse(message);
        const { tenantId, key, isEnabled } = parsedData;
        
        // Broadcast to everyone inside the specific tenant's room
        this.server.to(`tenant_${tenantId}`).emit('flagUpdated', { key, isEnabled });
        console.log(`📡 Broadcasted update for flag [${key}] to tenant [${tenantId}]`);
      }
    });
  }

  handleConnection(client: Socket) {
    const tenantId = client.handshake.query.tenantId as string;
    
    if (tenantId) {
      client.join(`tenant_${tenantId}`);
      console.log(`🔌 Client connected: ${client.id} joined room: tenant_${tenantId}`);
    } else {
      console.log(`⚠️ Client connected without providing a tenantId. Disconnecting...`);
      client.disconnect();
    }
  }

  handleDisconnect(client: Socket) {
    console.log(`❌ Client disconnected: ${client.id}`);
  }
}