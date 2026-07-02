import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FeatureFlagsModule } from './feature-flags/feature-flags.module';
import { TenantsModule } from './tenants/tenants.module';
import { EnvironmentsModule } from './environments/environments.module';

@Module({
  imports: [FeatureFlagsModule, TenantsModule, EnvironmentsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
