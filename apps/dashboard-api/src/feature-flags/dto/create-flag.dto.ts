import { IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateFeatureFlagDto {
  @IsString()
  @IsNotEmpty()
  key: string; 

  @IsString()
  @IsNotEmpty()
  tenantId: string;

  @IsString()
  @IsOptional()
  description?: string;
}