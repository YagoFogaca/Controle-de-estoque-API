import { Supply } from '../entities/supply.entity';
import { UpdateSupplyDto } from '../service/dto/update-supply.dto';
import { CreateSupplyValidation } from './createSupply.validation';

export class UpdateSupplyValidation extends CreateSupplyValidation {
  constructor({
    active,
    name,
    output_quantity,
    quantity_stock,
    unity,
  }: UpdateSupplyDto) {
    super({ active, name, output_quantity, quantity_stock, unity });
  }

  verifySupplyUpdate() {
    this.validationQuantity();
    this.validationUnity();
  }
}
