"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StreamingGateway = void 0;
const websockets_1 = require("@nestjs/websockets");
const socket_io_1 = require("socket.io");
const redis_sevice_1 = require("./redis.sevice");
const common_1 = require("@nestjs/common");
let StreamingGateway = class StreamingGateway {
    redisService;
    server;
    constructor(redisService) {
        this.redisService = redisService;
    }
    onModuleInit() {
        this.redisService.subClient.subscribe('feature-flag-updates');
        this.redisService.subClient.on('message', (channel, message) => {
            if (channel === 'feature-flag-updates') {
                const parsedData = JSON.parse(message);
                const { tenantId, key, isEnabled } = parsedData;
                this.server.to(`tenant_${tenantId}`).emit('flagUpdated', { key, isEnabled });
                console.log(`📡 Broadcasted update for flag [${key}] to tenant [${tenantId}]`);
            }
        });
    }
    handleConnection(client) {
        const tenantId = client.handshake.query.tenantId;
        if (tenantId) {
            client.join(`tenant_${tenantId}`);
            console.log(`🔌 Client connected: ${client.id} joined room: tenant_${tenantId}`);
        }
        else {
            console.log(`⚠️ Client connected without providing a tenantId. Disconnecting...`);
            client.disconnect();
        }
    }
    handleDisconnect(client) {
        console.log(`❌ Client disconnected: ${client.id}`);
    }
};
exports.StreamingGateway = StreamingGateway;
__decorate([
    (0, websockets_1.WebSocketServer)(),
    __metadata("design:type", socket_io_1.Server)
], StreamingGateway.prototype, "server", void 0);
exports.StreamingGateway = StreamingGateway = __decorate([
    (0, websockets_1.WebSocketGateway)({ cors: { origin: '*' } }),
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [redis_sevice_1.RedisService])
], StreamingGateway);
//# sourceMappingURL=streaming.gateway.js.map