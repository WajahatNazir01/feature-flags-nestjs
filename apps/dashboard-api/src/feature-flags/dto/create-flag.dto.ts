import { IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateFeatureFlagDto {
  @IsString()
  @IsNotEmpty()
  key: string; // 👈 Make sure this has these decorators!

  @IsString()
  @IsNotEmpty()
  tenantId: string;

  @IsString()
  @IsOptional()
  description?: string;
}