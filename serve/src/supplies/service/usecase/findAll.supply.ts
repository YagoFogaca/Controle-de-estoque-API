import { Supply } from 'src/supplies/entities/supply.entity';
import { SupplyRepository } from '../supply.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class FindAllUsecase {
  constructor(private readonly supplyRepository: SupplyRepository) {}

  async execute(): Promise<Supply[]> {
    // colocar validação
    return await this.supplyRepository.findAll();
  }
}
