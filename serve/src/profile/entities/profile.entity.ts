import { IUserEntity } from 'src/user/entities/user.entity';

export class Profile {
  id: string;
  user: IUserEntity;
  title: string;
  imageURL: string;
  supply_output: string[];
  supply_entry: string[];
}
