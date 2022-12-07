import { CreateSupplyValidation } from 'src/supplies/validations/createSupply.validation';
import { CreateSupplyDto } from '../dto/create-supply.dto';
import { SupplyRepository } from '../supply.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CreateSupplyUsecase {
  constructor(private readonly supplyRepository: SupplyRepository) {}

  async execute(supply: CreateSupplyDto): Promise<string> {
    const verificationNameSupply = await this.supplyRepository.findByName(
      supply.name,
    );
    if (verificationNameSupply) {
      throw new Error('Um insumo já foi registrado com esse nome.');
    }

    const verificationSupply = new CreateSupplyValidation(supply);

    const supplyCreated = await this.supplyRepository.create(
      verificationSupply.verifySupply(),
    );

    if (!supplyCreated) {
      throw new Error('Não foi possível criar um insumo.');
    }

    return 'Insumo criado com sucesso';
  }
}
