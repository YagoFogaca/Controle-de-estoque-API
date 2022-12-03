import { ISupply } from 'src/supplies/entities/supply.entity';

export class SupplyEntry {
  id: string;
  id_supply: ISupply;
  name_supply: string;
  amount: number;
  unity: string;
  entry_date: Date;
}
