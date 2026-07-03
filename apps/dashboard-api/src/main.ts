import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common'; // 👈 Import ValidationPipe

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({ origin: '*' });
  // 🚀 Global Validation Guardrail
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,        // Automatically strip out properties not defined in the DTO
    transform: true,        // Automatically transform payloads to match target DTO types
  }));

  await app.listen(3000);
  console.log('🚀 Dashboard API is securely running on: http://localhost:3000');
}
bootstrap();