import { Module } from '@nestjs/common';
import { TodoController } from './controllers/todo.controller';
import { TodoService } from './services/todo.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import Joi from 'joi';
import { DatabaseModule } from '../database/database.module';


@Module({
  imports: [
    ConfigModule.forRoot({
      validationSchema: Joi.object({
        POSTGRES_HOST: Joi.string().required(),
        POSTGRES_PORT: Joi.number().integer().positive().required(),
        POSTGRES_USER: Joi.string().required(),
        POSTGRES_PASSWORD: Joi.string().required(),
        POSTGRES_DB: Joi.string().required(),
        POSTGRES_SSL: Joi.boolean().required(),
      }),
    }),
    DatabaseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        console.log('configService.get("POSTGRES_HOST")', configService.get('POSTGRES_HOST'));
        console.log('configService.get("POSTGRES_PORT")', configService.get('POSTGRES_PORT'));
        console.log('configService.get("POSTGRES_USER")', configService.get('POSTGRES_USER'));
        console.log('configService.get("POSTGRES_DB")', configService.get('POSTGRES_DB'));
        console.log('configService.get("POSTGRES_SSL")', configService.get('POSTGRES_SSL'));
        return ({
          host: configService.get('POSTGRES_HOST') ?? '',
          port: configService.get('POSTGRES_PORT') ?? 0,
          user: configService.get('POSTGRES_USER') ?? '',
          password: configService.get('POSTGRES_PASSWORD') ?? '',
          database: configService.get('POSTGRES_DB') ?? '',
          ssl: configService.get('POSTGRES_SSL') ?? false,
        });
      },
    }),
  ],
  controllers: [TodoController],
  providers: [TodoService],
})
export class TodoModule {}
