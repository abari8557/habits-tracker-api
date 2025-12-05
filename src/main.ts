import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Get ConfigService and Winston logger
  const configService = app.get(ConfigService);
  const logger = app.get(WINSTON_MODULE_NEST_PROVIDER);
  
  // Use Winston logger
  //app.useLogger(logger);
  
  // Get port from environment variable, default to 3000
  const port = configService.get<number>('PORT', 3000);
  
  await app.listen(port);
  logger.log(`Application is running on port: ${port}`, 'Bootstrap');
}
bootstrap();
