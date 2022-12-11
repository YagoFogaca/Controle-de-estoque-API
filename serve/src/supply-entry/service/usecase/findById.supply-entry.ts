import { Injectable } from '@nestjs/common';
import { SupplyEntry } from 'src/supply-entry/entities/supply-entry.entity';
import { SupplyEntryRepository } from '../supply-entry.respository';

@Injectable()
export class FindByIdUsecase {
  constructor(private readonly supplyEntryRepository: SupplyEntryRepository) {}

  async execute(id: string): Promise<SupplyEntry> {
    const supplyEntry = await this.supplyEntryRepository.findById(id);

    if (!supplyEntry) {
      throw new Error('Nenhuma entrada de insumo com esse id');
    }

    return supplyEntry;
  }
}
