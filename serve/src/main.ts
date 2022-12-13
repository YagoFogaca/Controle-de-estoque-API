import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());
  app.enableCors();
  const config = new DocumentBuilder()
    .setTitle('Gerenciador de Estoque')
    .setDescription('Aplicação para gerenciar um estoque')
    .setVersion('1.0.0')
    .addBearerAuth()
    .build();

  const port = process.env.PORT || 3000;
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);

  await app.listen(port);
}
bootstrap();
