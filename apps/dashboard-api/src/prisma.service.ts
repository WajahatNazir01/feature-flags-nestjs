import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  constructor() {
    // Force string conversion securely to prevent pg driver from reading undefined or object types
    const connectionUri = process.env.DATABASE_URL 
      ? String(process.env.DATABASE_URL).trim()
      : 'postgresql://dev_user:dev_password@localhost:5432/flag_db?schema=public';

    const pool = new Pool({
      connectionString: connectionUri,
    });

    const adapter = new PrismaPg(pool);

    super({
      adapter,
    });
  }

  async onModuleInit() {
    await this.$connect();
    console.log('✅ Connected safely to PostgreSQL');
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }
}