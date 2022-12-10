import { Injectable } from '@nestjs/common';
import { SupplyEntry } from 'src/supply-entry/entities/supply-entry.entity';
import { SupplyEntryRepository } from '../supply-entry.respository';

@Injectable()
export class FindAllSupplyEntryUsecase {
  constructor(private readonly supplyEntryRepository: SupplyEntryRepository) {}

  async execute(): Promise<SupplyEntry[]> {
    return await this.supplyEntryRepository.findAll();
  }
}
