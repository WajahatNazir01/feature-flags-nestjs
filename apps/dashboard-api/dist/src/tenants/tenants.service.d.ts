import { PrismaService } from '../prisma.service';
import { CreateTenantDto } from './dto/create-tenant.dto';
import { UpdateTenantDto } from './dto/update-tenant.dto';
export declare class TenantsService {
    private prisma;
    constructor(prisma: PrismaService);
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
