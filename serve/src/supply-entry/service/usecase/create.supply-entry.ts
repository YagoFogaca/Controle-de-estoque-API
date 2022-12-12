import { Injectable } from '@nestjs/common';
import { ProfileService } from 'src/profile/service/profile.service';
import { SuppliesService } from 'src/supplies/service/supplies.service';
import { CreateSupplyEntryValidation } from 'src/supply-entry/validations/createSupply.validation';
import { CreateSupplyEntryDto } from '../dto/create-supply-entry.dto';
import { SupplyEntryRepository } from '../supply-entry.respository';

@Injectable()
export class CreateSupplyEntryUsecase {
  constructor(
    private readonly supplyEntryRepository: SupplyEntryRepository,
    private readonly suppliesService: SuppliesService,
    private readonly profileService: ProfileService,
  ) {}

  async execute(
    supplyEntry: CreateSupplyEntryDto,
    profileId: string,
  ): Promise<string> {
    const supply = await this.suppliesService.findById(supplyEntry.supplyId);

    await this.profileService.findOne(profileId);

    const verifySupplyEntry = new CreateSupplyEntryValidation(
      supplyEntry,
      profileId,
      supply.name,
      supply.unity,
    );

    const supply_entry = await this.supplyEntryRepository.create(
      verifySupplyEntry.verifySupply(),
    );
    if (!supply_entry) {
      throw new Error('Erro ao criar a entrada de insumo');
    }

    await this.suppliesService.supplyEntry(supply.id, supply_entry.amount);

    return 'Entrada de insumo criada com sucesso';
  }
}
