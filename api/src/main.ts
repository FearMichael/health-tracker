import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {

  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix("api")

  const options = new DocumentBuilder()
    .setTitle("Health Check API")
    .setDescription("Documentation for using the health check API")
    .setVersion(process.env.VERSION)
    .addTag("Health")
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup("api/docs", app, document);
  await app.listen(process.env.PORT || 3000);


}
bootstrap();
