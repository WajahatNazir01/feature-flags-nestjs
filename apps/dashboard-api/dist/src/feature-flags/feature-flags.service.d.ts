import { PrismaService } from '../prisma.service';
import { CreateFeatureFlagDto } from './dto/create-flag.dto';
import { ToggleFlagDto } from './dto/toggle-flag.dto';
export declare class FeatureFlagsService {
    private prisma;
    constructor(prisma: PrismaService);
    createFlag(createFlagDto: CreateFeatureFlagDto): Promise<{
        id: `${string}-${string}-${string}-${string}-${string}`;
        key: string;
        description: string | undefined;
        tenantId: string;
    }>;
    getTenantFlags(tenantId: string): Promise<any>;
    toggleFlagStatus(dto: ToggleFlagDto): Promise<{
        flagId: string;
        environmentId: string;
        isEnabled: boolean;
    }>;
    evaluateClientFlag(apiKey: string, key: string): Promise<{
        key: string;
        isEnabled: any;
    }>;
}
