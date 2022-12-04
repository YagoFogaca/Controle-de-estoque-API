import { UnitySupply } from 'src/utils/enuns/enum';

export class CreateSupplyEntryDto {
  id_supply: string;
  name_supply: string;
  amount: number;
  unity: UnitySupply;
  entry_date: Date;
}
