import { Injectable } from '@nestjs/common';
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
    const supplyUpdated = this.supplyRepository.update(id, supply);
    if (!supplyUpdated) {
      throw new Error('Insumo não foi atualizado');
    }

    return supplyUpdated;
  }
}
