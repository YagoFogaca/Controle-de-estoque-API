import { UnitySupply } from '../../utils/enuns/enum';

export class CreateSupplyDto {
  name: string;
  unity: UnitySupply;
  quantity_stock: number;
  output_quantity: number;
  active: boolean;
}
