import { FeatureFlagsService } from './feature-flags.service';
export declare class FeatureFlagsController {
    private readonly featureFlagsService;
    constructor(featureFlagsService: FeatureFlagsService);
    create(body: {
        key: string;
        description?: string;
    }): Promise<{
        id: string;
        key: string;
        description: string | null;
        createdAt: Date;
    }>;
    findAll(): Promise<({
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
