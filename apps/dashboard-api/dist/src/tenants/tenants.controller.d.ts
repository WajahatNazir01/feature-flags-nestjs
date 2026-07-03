import { TenantsService } from './tenants.service';
import { CreateTenantDto } from './dto/create-tenant.dto';
import { UpdateTenantDto } from './dto/update-tenant.dto';
export declare class TenantsController {
    private readonly tenantsService;
    constructor(tenantsService: TenantsService);
    create(createTenantDto: CreateTenantDto): Promise<{
        environments: {
            tenantId: string;
            apiKey: string;
            id: string;
            name: string;
            createdAt: Date;
        }[];
    } & {
        id: string;
        name: string;
        createdAt: Date;
    }>;
    findAll(): Promise<({
        environments: {
            tenantId: string;
            apiKey: string;
            id: string;
            name: string;
            createdAt: Date;
        }[];
    } & {
        id: string;
        name: string;
        createdAt: Date;
    })[]>;
    findOne(id: string): Promise<({
        environments: {
            tenantId: string;
            apiKey: string;
            id: string;
            name: string;
            createdAt: Date;
        }[];
    } & {
        id: string;
        name: string;
        createdAt: Date;
    }) | null>;
    update(id: string, updateTenantDto: UpdateTenantDto): Promise<{
        id: string;
        name: string;
        createdAt: Date;
    }>;
    remove(id: string): Promise<{
        id: string;
        name: string;
        createdAt: Date;
    }>;
}
