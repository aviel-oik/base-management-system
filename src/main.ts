import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);

    // POUR DTO
    app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,      // supprime les champs non autorisés
      forbidNonWhitelisted: true, // erreur si champ interdit
    }),
  );

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
