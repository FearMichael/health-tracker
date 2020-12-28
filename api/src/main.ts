import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as dotenv from "dotenv";
import { resolve } from "path";
dotenv.config({ path: resolve(__dirname, "../../.env") });

async function bootstrap() {

  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix("api")

  const options = new DocumentBuilder()
    .setTitle("Health Tracker API")
    .setDescription("Documentation for using the Health Tracker API")
    .setVersion(process.env.VERSION)
    .addTag("Health")
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup("docs", app, document);
  await app.listen(process.env.PORT || 3000);


}
bootstrap();
