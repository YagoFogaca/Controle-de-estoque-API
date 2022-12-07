import { Injectable } from '@nestjs/common';
import { UpdateSupplyValidation } from 'src/supplies/validations/updateSupply.validation';
import { UpdateSupplyDto } from '../dto/update-supply.dto';
import { SupplyRepository } from '../supply.repository';
import { FindByIdUsecase } from './findById.supply';

@Injectable()
export class UpdateSupplyUsecase {
  constructor(
    private readonly supplyRepository: SupplyRepository,
    private readonly findByIdUsecase: FindByIdUsecase,
  ) {}

  async execute(id: string, supply: UpdateSupplyDto) {
    const supplyUpdate = await this.findByIdUsecase.execute(id);

    const updateProfile = Object.assign(supplyUpdate, supply);

    const verificationSupply = new UpdateSupplyValidation(updateProfile);
    verificationSupply.verifySupplyUpdate();

    const supplyUpdated = this.supplyRepository.update(id, supply);
    if (!supplyUpdated) {
      throw new Error('Insumo não foi atualizado');
    }
    return supplyUpdated;
  }
}
