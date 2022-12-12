import { UpdateSupplyEntryDto } from '../service/dto/update-supply-entry.dto';

export class UpdateSupplyEntryValidation extends UpdateSupplyEntryDto {
  constructor({ amount }: UpdateSupplyEntryDto) {
    super();
    this.amount = amount;
  }

  validationAmount() {
    if (this.amount <= 0) {
      throw new Error(
        'Não é possivel registrar uma entrada com quantidade menor ou igual a zero',
      );
    }
  }
}
