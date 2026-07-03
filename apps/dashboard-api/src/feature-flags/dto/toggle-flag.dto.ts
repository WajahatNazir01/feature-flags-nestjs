import { IsString, IsNotEmpty, IsBoolean } from 'class-validator';

export class ToggleFlagDto {
  @IsString()
  @IsNotEmpty()
  flagId: string;

  @IsString()
  @IsNotEmpty()
  environmentId: string;

  @IsBoolean()
  @IsNotEmpty()
  isEnabled: boolean;
}