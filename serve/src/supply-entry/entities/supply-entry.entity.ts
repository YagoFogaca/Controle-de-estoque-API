import { UnitySupply } from '../../utils/enuns/enum';

export class SupplyEntry {
  id: string;
  id_profile: string;
  id_supply: string;
  name_supply: string;
  amount: number;
  unity: UnitySupply;
  entry_date: Date;
}
