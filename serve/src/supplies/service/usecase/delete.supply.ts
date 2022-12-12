import { Supply } from 'src/supplies/entities/supply.entity';
import { SupplyRepository } from '../supply.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class DeleteSupplyUsecase {
  constructor(private readonly supplyRepository: SupplyRepository) {}

  async execute(id: string): Promise<string> {
    const supplyDeleted = await this.supplyRepository.delete(id);
    if (!supplyDeleted) {
      throw new Error('Não foi possível deletar um insumo');
    }

    return 'Insumo deletado com sucesso';
  }
}
