import { defineConfig } from "@mikro-orm/postgresql";
import { env } from "./env";

export default defineConfig({
  dbName: env.POSTGRES_DB,
  host: env.POSTGRES_HOST,
  port: env.POSTGRES_PORT,
  user: env.POSTGRES_USER,
  password: env.POSTGRES_PASSWORD,

  entities: [],

  discovery: {
    warnWhenNoEntities: false,
  },

  debug: true,

  migrations: {
    path: "../migrations",
    snapshot: false,
  },
});
