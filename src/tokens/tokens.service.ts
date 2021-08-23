import jwt from 'jsonwebtoken';
import { Injectable, Inject } from '@nestjs/common';

import { TokenModel } from '../models/token.model';
import { GenerateTokenDto } from './dto/generate-token.dto';

@Injectable()
export class TokensService {
  constructor(@Inject(TokenModel) private readonly tokenModel: typeof TokenModel) {}

  static TOKEN_EXPIRE_TIME = 15 * 60;

  signToken(userId: string, tokenType: 'refresh' | 'access') {
    const secret = tokenType === 'refresh' ? process.env.REFRESH_TOKEN_SECRET : process.env.ACCESS_TOKEN_SECRE;
    return jwt.sign(userId, secret, { expiresIn: TokensService.TOKEN_EXPIRE_TIME });
  }

  async generateNewToken({ userId, refreshToken }: GenerateTokenDto) {
    const { token } = await TokenModel.query().where('token', refreshToken).first();

    if (!token) {
      throw new Error('token error');
    }

    jwt.verify(token, process.env.REFRESH_TOKEN_SECRET, (error, user) => {
      if (error) {
        throw new Error();
      }

      const accessToken = this.signToken(userId, 'access');
      return jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET);
    });
  }

  async createRefreshToken(userId: string) {
    const refreshToken = this.signToken(userId, 'refresh');

    await TokenModel.query().insert({
      creationDate: new Date(),
      token: refreshToken,
    });
  }
}
