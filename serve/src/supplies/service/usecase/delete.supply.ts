import { SupplyRepository } from '../supply.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class DeleteSupplyUsecase {
  constructor(private readonly supplyRepository: SupplyRepository) {}

  async execute(id: string): Promise<string> {
    try {
      const supplyDeleted = await this.supplyRepository.delete(id);
      if (!supplyDeleted) {
        throw new Error('Insumo não foi encontrado');
      }

      return 'Insumo deletado com sucesso';
    } catch (error) {
      console.log(error);
      throw new Error('Insumo não foi encontrado');
    }
  }
}
