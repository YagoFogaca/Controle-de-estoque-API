import { DateSupply } from 'src/utils/date/date';
import { UnitySupply } from 'src/utils/enuns/enum';
import { IdGenerator } from 'src/utils/id-generator/id-generator';
import { SupplyEntry } from '../entities/supply-entry.entity';
import { CreateSupplyEntryDto } from '../service/dto/create-supply-entry.dto';

export class CreateSupplyEntryValidation extends SupplyEntry {
  constructor(
    { supplyId, amount, profileId }: CreateSupplyEntryDto,
    name_supply: string,
    unity: string,
  ) {
    super();
    this.profileId = profileId;
    this.supplyId = supplyId;
    this.amount = amount;
    this.name_supply = name_supply;
    this.unity = unity;
  }

  validationAmount() {
    if (this.amount <= 0) {
      throw new Error(
        'Não é possivel registrar uma entrada com quantidade menor ou igual a zero',
      );
    }
  }

  verifySupply() {
    this.validationAmount();

    return {
      id: IdGenerator.idGenerator(),
      profileId: this.profileId,
      supplyId: this.supplyId,
      name_supply: this.name_supply,
      amount: this.amount,
      unity: this.unity,
      entry_date: DateSupply.dateGenerator(),
    };
  }
}
