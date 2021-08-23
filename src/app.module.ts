import { resolve } from 'path';
import { Module } from '@nestjs/common';
import { knexSnakeCaseMappers } from 'objection';
import { ObjectionModule } from '@willsoto/nestjs-objection';
import { ConfigService } from '@nestjs/config';
import { ConfigModule } from 'nestjs-config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TokensController } from './tokens/tokens.controller';
import { TokensService } from './tokens/tokens.service';
import { TokensModule } from './tokens/tokens.module';

@Module({
  imports: [
    ConfigModule.load(resolve(__dirname, 'config', '**/!(*.d).config.{ts,js}'), {
      modifyConfigName: (name) => name.replace('.config', ''),
    }),
    ObjectionModule.registerAsync({
      useFactory: (configService: ConfigService) => ({
        config: {
          ...configService.get('sql'),
          ...knexSnakeCaseMappers(),
        },
      }),
    }),
    UsersModule,
    TokensModule,
  ],
  controllers: [AppController, TokensController],
  providers: [AppService, TokensService],
})
export class AppModule {}
