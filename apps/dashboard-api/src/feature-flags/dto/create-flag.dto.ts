export class CreateFeatureFlagDto {
  key: string;
  description?: string;
  tenantId: string; // Mandatory attribute for scoping
}