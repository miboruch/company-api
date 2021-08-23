import { BaseModel } from './base.model';

export class TokenModel extends BaseModel {
  static tableName = 'tokens';

  id: number;
  creationDate: Date;
  token: string;
}
