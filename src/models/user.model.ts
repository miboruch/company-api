import { BaseModel } from './base.model';

export class UserModel extends BaseModel {
  static tableName = 'users';

  id: number;
  name: string;
  surname: string;
  email: string;
  country: string;
  address: string;
}
