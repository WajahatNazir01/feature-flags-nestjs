import { PrismaService } from '../prisma.service';
export declare class FeatureFlagsService {
    private prisma;
    constructor(prisma: PrismaService);
    createFlag(data: {
        key: string;
        description?: string;
    }): Promise<{
        id: string;
        key: string;
        description: string | null;
        createdAt: Date;
    }>;
    getAllFlags(): Promise<({
        statuses: {
            id: string;
            environmentId: string;
            flagId: string;
            isEnabled: boolean;
            rules: import("@prisma/client/runtime/client").JsonValue | null;
        }[];
    } & {
        id: string;
        key: string;
        description: string | null;
        createdAt: Date;
    })[]>;
}
