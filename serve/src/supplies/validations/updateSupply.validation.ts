import { Supply } from '../entities/supply.entity';
import { UpdateSupplyDto } from '../service/dto/update-supply.dto';
import { CreateSupplyValidation } from './createSupply.validation';

export class UpdateSupplyValidation extends CreateSupplyValidation {
  constructor({
    id,
    active,
    name,
    output_quantity,
    quantity_stock,
    unity,
  }: UpdateSupplyDto) {
    super({ active, name, output_quantity, quantity_stock, unity });
    this.id = id;
  }

  verifySupplyUpdate() {
    this.validationQuantity();
    this.validationUnity();
    // return {
    //   id: this.id,
    //   name: this.name,
    //   unity: this.unity,
    //   quantity_stock: this.quantity_stock,
    //   output_quantity: this.output_quantity,
    //   active: this.active,
    // };
  }
}
