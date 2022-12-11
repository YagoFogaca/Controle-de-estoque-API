import { Injectable } from '@nestjs/common';
import { SuppliesService } from 'src/supplies/service/supplies.service';
import { IdGenerator } from 'src/utils/id-generator/id-generator';
import { CreateSupplyEntryDto } from './dto/create-supply-entry.dto';
import { UpdateSupplyEntryDto } from './dto/update-supply-entry.dto';
import { SupplyEntry } from '../entities/supply-entry.entity';
import { ProfileService } from '../../profile/service/profile.service';
import { CreateSupplyEntryUsecase } from './usecase/create.supply-entry';
import { FindAllSupplyEntryUsecase } from './usecase/find-all.supply-entry';
import { FindByIdUsecase } from './usecase/findById.supply-entry';
import { DeleteSupplyUsecase } from './usecase/delete.supply-entry';

@Injectable()
export class SupplyEntryService {
  constructor(
    private readonly createSupplyEntry: CreateSupplyEntryUsecase,
    private readonly findAllSupplyEntryUsecase: FindAllSupplyEntryUsecase,
    private readonly findByIdUsecase: FindByIdUsecase,
    private readonly deleteSupplyUsecase: DeleteSupplyUsecase,
  ) {}

  async create(
    supplyEntry: CreateSupplyEntryDto,
    profileId: string,
  ): Promise<string> {
    return await this.createSupplyEntry.execute(supplyEntry, profileId);
  }

  async findAll(): Promise<SupplyEntry[]> {
    return this.findAllSupplyEntryUsecase.execute();
  }

  async findById(id: string): Promise<SupplyEntry> {
    return await this.findByIdUsecase.execute(id);
  }

  // async update(id: string, supplyEntry: UpdateSupplyEntryDto): Promise<string> {
  //   // Colocar um verificação se a quatidade de entrada também foi alterada
  //   const findOne = await this.findOne(id);

  //   const updateSupplyEntry = Object.assign(findOne, supplyEntry);
  //   this._supply_entry.map((findSupply, index) => {
  //     if (findSupply.id === id) {
  //       this._supply_entry.splice(index, 1, updateSupplyEntry);
  //     }
  //   });
  //   return 'Entrada de insumo atualizada com sucesso';
  // }

  async remove(id: string): Promise<string> {
    await this.deleteSupplyUsecase.execute(id);
    return 'Entrada de insumo deletada com sucesso';
  }
}
