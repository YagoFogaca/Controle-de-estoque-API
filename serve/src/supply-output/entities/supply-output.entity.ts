import { UnitySupply } from '../../utils/enuns/enum';

export class SupplyOutput {
  id: string;
  id_profile: string;
  id_supply: string;
  name_supply: string;
  amount: number;
  unity: UnitySupply;
  requester: string;
  output_date: Date;
}
