import { Supply } from 'src/supplies/entities/supply.entity';
import { SupplyRepository } from '../supply.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class DeleteSupplyUsecase {
  constructor(private readonly supplyRepository: SupplyRepository) {}

  async execute(id: string): Promise<Supply> {
    // colocar validação
    return await this.supplyRepository.delete(id);
  }
}
