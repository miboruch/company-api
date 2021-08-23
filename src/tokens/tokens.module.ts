import { Module } from '@nestjs/common';
import { ObjectionModule } from '@willsoto/nestjs-objection';

import { TokenModel } from '../models/token.model';
import { TokensController } from './tokens.controller';
import { TokensService } from './tokens.service';

@Module({
  imports: [ObjectionModule.forFeature([TokenModel])],
  controllers: [TokensController],
  providers: [TokensService],
  exports: [],
})
export class TokensModule {}
