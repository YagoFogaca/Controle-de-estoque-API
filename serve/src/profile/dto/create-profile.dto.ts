import { IUserEntity } from 'src/user/entities/user.entity';

export class CreateProfileDto {
  user: IUserEntity;
  title: string;
  imageURL: string;
  supply_output: string[];
  supply_entry: string[];
}
