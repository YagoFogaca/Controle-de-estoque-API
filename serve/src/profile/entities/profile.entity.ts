import { SupplyEntry } from 'src/supply-entry/entities/supply-entry.entity';
import { SupplyOutput } from 'src/supply-output/entities/supply-output.entity';
import { IUserEntity } from 'src/user/entities/user.entity';

export class Profile {
  id: string;
  user: IUserEntity;
  title: string;
  imageURL: string;
  supply_output: SupplyEntry[];
  supply_entry: SupplyOutput[];
}
