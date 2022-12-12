import { Injectable } from '@nestjs/common';
import { SuppliesService } from 'src/supplies/service/supplies.service';
import { UpdateSupplyEntryValidation } from 'src/supply-entry/validations/updateSupply.validation';
import { UpdateSupplyEntryDto } from '../dto/update-supply-entry.dto';
import { SupplyEntryRepository } from '../supply-entry.respository';
import { FindByIdUsecase } from './findById.supply-entry';

@Injectable()
export class UpdateSupplyUsecase {
  constructor(
    private readonly supplyEntryRepository: SupplyEntryRepository,
    private readonly findByIdUsecase: FindByIdUsecase,
    private readonly suppliesService: SuppliesService,
  ) {}

  async execute(
    id: string,
    supplyEntry: UpdateSupplyEntryDto,
  ): Promise<string> {
    const findSupplyEntry = await this.findByIdUsecase.execute(id);
    if (supplyEntry.amount) {
      const verifyAmount = new UpdateSupplyEntryValidation(supplyEntry);
      verifyAmount.validationAmount();

      if (supplyEntry.amount !== findSupplyEntry.amount) {
        if (supplyEntry.amount > findSupplyEntry.amount) {
          console.log(supplyEntry.amount + ' / ' + findSupplyEntry.amount);

          const amount = supplyEntry.amount - findSupplyEntry.amount;

          await this.supplyEntryRepository.update(id, supplyEntry);

          await this.suppliesService.supplyEntry(
            findSupplyEntry.supplyId,
            amount,
          );
        } else if (supplyEntry.amount < findSupplyEntry.amount) {
          console.log(findSupplyEntry.amount + ' / ' + supplyEntry.amount);

          await this.supplyEntryRepository.update(id, supplyEntry);

          const amount = findSupplyEntry.amount - supplyEntry.amount;
          console.log(amount);
          await this.suppliesService.supplyOutput(
            findSupplyEntry.supplyId,
            amount,
          );
        }
      } else {
        throw new Error('A entrada de insumo já tem essa quantidade');
      }
    }

    return 'Entrada atualizada com sucesso';
  }
}
