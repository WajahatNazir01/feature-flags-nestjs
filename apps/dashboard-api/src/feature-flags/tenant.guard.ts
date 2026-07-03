import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class TenantGuard implements CanActivate {
  constructor(private prisma: PrismaService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    
    // Extract the api key from request headers
    const apiKey = request.headers['x-api-key'] || request.query['apiKey'];

    if (!apiKey) {
      throw new UnauthorizedException('Access Denied: Missing api key context.');
    }

    // Direct database validation lookup
    const environmentCheck: any[] = await (this.prisma as any).$queryRaw`
      SELECT id, "tenantId" FROM "Environment" WHERE "apiKey" = ${apiKey}
    `;

    if (!environmentCheck || environmentCheck.length === 0) {
      throw new UnauthorizedException('Access Denied: Invalid or revoked api key.');
    }

    // Attach verified context directly to the request object for downstream use
    request.tenantContext = {
      environmentId: environmentCheck[0].id,
      tenantId: environmentCheck[0].tenantId,
    };

    return true;
  }
}