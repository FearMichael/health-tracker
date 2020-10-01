import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as dotenv from "dotenv";
dotenv.config();


async function bootstrap() {

  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder()
    .setTitle("Health Check API")
    .setDescription("Documentation for using the health check API")
    .setVersion(process.env.VERSION)
    .addTag("Health")
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup("docs", app, document);
  await app.listen(3000);


}
bootstrap();
