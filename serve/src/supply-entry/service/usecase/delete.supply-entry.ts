import { Injectable } from '@nestjs/common';
import { SuppliesService } from 'src/supplies/service/supplies.service';
import { SupplyEntryRepository } from '../supply-entry.respository';

@Injectable()
export class DeleteSupplyUsecase {
  constructor(
    private readonly supplyEntryRepository: SupplyEntryRepository,
    private readonly suppliesService: SuppliesService,
  ) {}

  async execute(id: string): Promise<string> {
    try {
      const supplyEntry = await this.supplyEntryRepository.delete(id);
      if (!supplyEntry) {
        throw new Error('Usuário não encontrado.');
      }

      await this.suppliesService.supplyOutput(
        supplyEntry.supplyId,
        supplyEntry.amount,
      );
      return 'Entrada deletada com sucesso';
    } catch (error) {
      console.log(error);
      throw new Error('Entrada não foi encontrada');
    }
  }
}
