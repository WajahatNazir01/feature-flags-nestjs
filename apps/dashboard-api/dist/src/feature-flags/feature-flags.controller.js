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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeatureFlagsController = void 0;
const common_1 = require("@nestjs/common");
const feature_flags_service_1 = require("./feature-flags.service");
const create_flag_dto_1 = require("./dto/create-flag.dto");
const toggle_flag_dto_1 = require("./dto/toggle-flag.dto");
const tenant_guard_1 = require("./tenant.guard");
let FeatureFlagsController = class FeatureFlagsController {
    featureFlagsService;
    constructor(featureFlagsService) {
        this.featureFlagsService = featureFlagsService;
    }
    create(createFeatureFlagDto) {
        return this.featureFlagsService.createFlag(createFeatureFlagDto);
    }
    findAll(tenantId) {
        return this.featureFlagsService.getTenantFlags(tenantId);
    }
    toggleStatus(toggleFlagDto) {
        return this.featureFlagsService.toggleFlagStatus(toggleFlagDto);
    }
    async evaluateFlag(apiKey, key) {
        return this.featureFlagsService.evaluateClientFlag(apiKey, key);
    }
};
exports.FeatureFlagsController = FeatureFlagsController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_flag_dto_1.CreateFeatureFlagDto]),
    __metadata("design:returntype", void 0)
], FeatureFlagsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('tenantId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FeatureFlagsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)('toggle'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [toggle_flag_dto_1.ToggleFlagDto]),
    __metadata("design:returntype", void 0)
], FeatureFlagsController.prototype, "toggleStatus", null);
__decorate([
    (0, common_1.Get)('evaluate'),
    (0, common_1.UseGuards)(tenant_guard_1.TenantGuard),
    __param(0, (0, common_1.Query)('apiKey')),
    __param(1, (0, common_1.Query)('key')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], FeatureFlagsController.prototype, "evaluateFlag", null);
exports.FeatureFlagsController = FeatureFlagsController = __decorate([
    (0, common_1.Controller)('feature-flags'),
    __metadata("design:paramtypes", [feature_flags_service_1.FeatureFlagsService])
], FeatureFlagsController);
//# sourceMappingURL=feature-flags.controller.js.map