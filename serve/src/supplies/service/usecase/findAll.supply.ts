import { Supply } from 'src/supplies/entities/supply.entity';
import { SupplyRepository } from '../supply.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class FindAllUsecase {
  constructor(private readonly supplyRepository: SupplyRepository) {}

  async execute(): Promise<string | Supply[]> {
    const supplies = await this.supplyRepository.findAll();
    if (supplies.length <= 0) {
      return 'Não a insumos registrados';
    }

    return supplies;
  }
}
