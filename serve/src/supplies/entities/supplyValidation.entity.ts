import { CreateSupplyDto } from '../dto/create-supply.dto';
import { ISupply } from './supply.entity';
import { IdGenerator } from '../../utils/id-generator/id-generator';
import { UnitySupply } from '../../utils/enuns/enum';

export class SupplyEntity extends ISupply {
  constructor({
    name,
    active,
    output_quantity,
    quantity_stock,
    unity,
  }: CreateSupplyDto) {
    super();
    this.active = active;
    this.name = name;
    this.output_quantity = output_quantity;
    this.quantity_stock = quantity_stock;
    this.unity = unity;
  }

  validationQuantity() {
    if (this.quantity_stock < 0) {
      throw new Error(
        'Não é possivel registrar um insumo com quantidade de estoque menor que zero',
      );
    }

    if (this.output_quantity < 0) {
      throw new Error(
        'Não é possivel registrar um insumo com quantidade de saida menor que zero',
      );
    }
  }

  validationUnity() {
    if (
      this.unity !== UnitySupply.CX &&
      this.unity !== UnitySupply.UN &&
      this.unity !== UnitySupply.M &&
      this.unity !== UnitySupply.KG
    ) {
      throw new Error('O tipo de unidade não é compativel');
    }
  }

  verifySupply() {
    this.validationQuantity();
    this.validationUnity();
    return {
      id: IdGenerator.idGenerator(),
      name: this.name,
      unity: this.unity,
      quantity_stock: this.quantity_stock,
      output_quantity: this.output_quantity,
      active: this.active,
    };
  }
}
