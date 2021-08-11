import { Inject, Injectable } from '@nestjs/common';
import { UserModel } from '../models/user.model';

@Injectable()
export class UsersService {
  constructor(@Inject(UserModel) private readonly userModel: typeof UserModel) {}

  getUsers() {
    return this.userModel.query().select('user.*');
  }
}
