export class CreateSupplyDto {
  name: string;
  unity: string;
  quantity_stock: number;
  quantity_returned: number;
  output_quantity: number;
  active: boolean;
}
