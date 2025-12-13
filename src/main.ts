import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('NestJs boilerplate General API')
    .setDescription('The NestJs Boilerplate API description')
    .setVersion('1.0')
    .addTag('boilerplate')
    .addBearerAuth(
      {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
        name: 'JWT',
        description: 'Enter JWT token',
        in: 'header',
      },
      'JWT-auth', // This name here is important for matching up with @ApiBearerAuth() in your controller!
    )
    .build();

  const document = SwaggerModule.createDocument(app, config, {});
  SwaggerModule.setup('api/docs', app, document, {
    jsonDocumentUrl: 'api/docs/swagger/json',
  });

  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));

  app.enableCors({
    origin: '*',
    credentials: true,
    // all headers that client are allowed to use
    allowedHeaders: ['*'],
    methods: ['*'],
  });

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
