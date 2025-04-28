import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api'); // http://localhost:5001/test  =>  http://localhost:5001/nest-api/test
  await app.listen(process.env.PORT ?? 4000);
}
bootstrap();
