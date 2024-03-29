import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function startApp() {
    const app = await NestFactory.create(AppModule);

    app.listen(3000);
}

startApp();