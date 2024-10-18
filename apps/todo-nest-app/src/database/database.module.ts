import { Global, Module } from "@nestjs/common";
import { ConfigurableDatabaseModule, CONNECTION_POOL, DATABASE_OPTIONS } from "./database.module-definition";
import { Pool } from "pg";
import { DatabaseOptions } from "./database-options";
import { DrizzleService } from "./drizzle.service";


@Global()
@Module({
  exports: [DrizzleService],
  providers: [
    DrizzleService,
    {
      provide: CONNECTION_POOL,
      inject: [DATABASE_OPTIONS],
      useFactory: (databaseOptions: DatabaseOptions) => {
        return new Pool({
          host: databaseOptions.host,
          port: databaseOptions.port,
          user: databaseOptions.user,
          password: databaseOptions.password,
          database: databaseOptions.database,
          ssl: databaseOptions.ssl,
        });
      },
    },
  ],
})
export class DatabaseModule extends ConfigurableDatabaseModule {}
