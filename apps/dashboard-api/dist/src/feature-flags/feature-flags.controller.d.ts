import { FeatureFlagsService } from './feature-flags.service';
import { CreateFeatureFlagDto } from './dto/create-flag.dto';
import { ToggleFlagDto } from './dto/toggle-flag.dto';
export declare class FeatureFlagsController {
    private readonly featureFlagsService;
    constructor(featureFlagsService: FeatureFlagsService);
    create(createFeatureFlagDto: CreateFeatureFlagDto): Promise<{
        id: `${string}-${string}-${string}-${string}-${string}`;
        key: string;
        description: string | undefined;
        tenantId: string;
    }>;
    findAll(tenantId: string): Promise<any>;
    toggleStatus(toggleFlagDto: ToggleFlagDto): Promise<{
        flagId: string;
        environmentId: string;
        isEnabled: boolean;
    }>;
}
