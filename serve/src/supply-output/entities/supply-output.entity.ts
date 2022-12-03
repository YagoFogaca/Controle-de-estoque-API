import { Supply } from 'src/supplies/entities/supply.entity';

export class SupplyOutput {
  id: string;
  id_supply: Supply;
  name_supply: string;
  amount: number;
  unity: string;
  requester: string;
  output_date: Date;
}
