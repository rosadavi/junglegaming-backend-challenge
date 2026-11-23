import "reflect-metadata";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { MikroORM } from "@mikro-orm/postgresql";
import { env } from "./config/env";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.get(MikroORM).connect();
  await app.listen(env.APP_PORT);
}

bootstrap();
