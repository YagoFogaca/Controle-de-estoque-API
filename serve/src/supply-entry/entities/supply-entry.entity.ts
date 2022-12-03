import { Supply } from 'src/supplies/entities/supply.entity';

export class SupplyEntry {
  id: string;
  id_supply: Supply;
  name_supply: string;
  amount: number;
  unity: string;
  date: Date;
  time: Date;
}
