import { ISupply } from 'src/supplies/entities/supply.entity';

export class SupplyOutput {
  id: string;
  id_supply: ISupply;
  name_supply: string;
  amount: number;
  unity: string;
  requester: string;
  output_date: Date;
}
