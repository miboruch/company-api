import { Inject, Injectable } from '@nestjs/common';

import { UserModel } from '../models/user.model';
import { TokenModel } from '../models/token.model';
import { TokensService } from '../tokens/tokens.service';

@Injectable()
export class UsersService {
  constructor(
    @Inject(UserModel) private readonly userModel: typeof UserModel,
    @Inject(TokenModel) private readonly tokenModel: typeof TokenModel,
    private readonly tokenService: TokensService,
  ) {}

  getUsers() {
    return this.userModel.query().select('user.*');
  }
  /*
    TODO: login, signup
   */
}
