import { Injectable } from '@nestjs/common';
import { CreateSupplyEntryDto } from './dto/create-supply-entry.dto';
import { UpdateSupplyEntryDto } from './dto/update-supply-entry.dto';
import { SupplyEntry } from '../entities/supply-entry.entity';
import { CreateSupplyEntryUsecase } from './usecase/create.supply-entry';
import { FindAllSupplyEntryUsecase } from './usecase/find-all.supply-entry';
import { FindByIdUsecase } from './usecase/findById.supply-entry';
import { DeleteSupplyUsecase } from './usecase/delete.supply-entry';
import { UpdateSupplyUsecase } from './usecase/update.supply';

@Injectable()
export class SupplyEntryService {
  constructor(
    private readonly createSupplyEntry: CreateSupplyEntryUsecase,
    private readonly findAllSupplyEntryUsecase: FindAllSupplyEntryUsecase,
    private readonly findByIdUsecase: FindByIdUsecase,
    private readonly deleteSupplyUsecase: DeleteSupplyUsecase,
    private readonly updateSupplyUsecase: UpdateSupplyUsecase,
  ) {}

  async create(
    supplyEntry: CreateSupplyEntryDto,
    profileId: string,
  ): Promise<string> {
    return await this.createSupplyEntry.execute(supplyEntry, profileId);
  }

  async findAll(): Promise<SupplyEntry[] | string> {
    return this.findAllSupplyEntryUsecase.execute();
  }

  async findById(id: string): Promise<SupplyEntry> {
    return await this.findByIdUsecase.execute(id);
  }

  async update(id: string, supplyEntry: UpdateSupplyEntryDto): Promise<string> {
    await this.updateSupplyUsecase.execute(id, supplyEntry);
    return 'Entrada de insumo atualizada com sucesso';
  }

  async remove(id: string): Promise<string> {
    await this.deleteSupplyUsecase.execute(id);
    return 'Entrada de insumo deletada com sucesso';
  }
}
