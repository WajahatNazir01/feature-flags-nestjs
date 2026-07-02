import { PrismaService } from '../prisma.service';
import { CreateFeatureFlagDto } from './dto/create-flag.dto';
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
}
