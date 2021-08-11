import { Global, Module } from '@nestjs/common';
import { ObjectionModule } from '@willsoto/nestjs-objection';

import { UserModel } from '../models/user.model';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Global()
@Module({
  imports: [ObjectionModule.forFeature([UserModel])],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [],
})
export class UsersModule {}
