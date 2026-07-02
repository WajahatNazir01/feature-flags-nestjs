import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreateTenantDto } from './dto/create-tenant.dto';
import { UpdateTenantDto } from './dto/update-tenant.dto';
import * as crypto from 'crypto'; // Unique API keys generate karne ke liye

@Injectable()
export class TenantsService {
  // PrismaService inject ho gayi bina extra properties ke pange ke
  constructor(private prisma: PrismaService) {}

  async create(createTenantDto: CreateTenantDto) {
    // Single atomic transaction mein Tenant aur uske default environments create honge
    return this.prisma.tenant.create({
      data: {
        name: createTenantDto.name,
        environments: {
          create: [
            {
              name: 'Development',
              apiKey: crypto.randomUUID(),
            },
            {
              name: 'Production',
              apiKey: crypto.randomUUID(),
            },
          ],
        },
      },
      include: {
        environments: true,
      },
    });
  }

  async findAll() {
    return this.prisma.tenant.findMany({
      include: {
        environments: true,
      },
    });
  }

  async findOne(id: string) {
    return this.prisma.tenant.findUnique({
      where: { id },
      include: {
        environments: true,
      },
    });
  }

  async update(id: string, updateTenantDto: UpdateTenantDto) {
    return this.prisma.tenant.update({
      where: { id },
      data: {
        name: updateTenantDto.name,
      },
    });
  }

  async remove(id: string) {
    return this.prisma.tenant.delete({
      where: { id },
    });
  }
}