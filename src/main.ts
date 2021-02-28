import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.setGlobalPrefix('api');
    app.useGlobalPipes(new ValidationPipe());
    app.enableCors();

    const options = new DocumentBuilder()
        .setTitle('Nest Boilerplate')
        .setDescription('This is a basic template for NestJS development.')
        .setVersion('1.0.0')
        .addBearerAuth()
        .addServer('http://')
        .addServer('https://')
        .build();
    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup('', app, document);
    await app.listen(process.env.PORT || 5000);
}
bootstrap();
