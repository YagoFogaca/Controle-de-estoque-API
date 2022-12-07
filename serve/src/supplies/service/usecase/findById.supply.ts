import { Supply } from 'src/supplies/entities/supply.entity';
import { SupplyRepository } from '../supply.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class FindByIdUsecase {
  constructor(private readonly supplyRepository: SupplyRepository) {}

  async execute(id: string): Promise<Supply> {
    const supply = await this.supplyRepository.findById(id);

    if (!supply) {
      throw new Error('Nenhum insumo com esse id ');
    }

    return supply;
  }
}
