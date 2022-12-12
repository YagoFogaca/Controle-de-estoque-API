import { Injectable } from '@nestjs/common';
import { CreateSupplyDto } from './dto/create-supply.dto';
import { UpdateSupplyDto } from './dto/update-supply.dto';
import { Supply } from '../entities/supply.entity';
import { CreateSupplyUsecase } from './usecase/create.supply';
import { FindAllUsecase } from './usecase/findAll.supply';
import { FindByIdUsecase } from './usecase/findById.supply';
import { DeleteSupplyUsecase } from './usecase/delete.supply';
import { UpdateSupplyUsecase } from './usecase/update.supply';
import { SupplyEntryUsecase } from './usecase/entry.supply';
import { SupplyOutputUsecase } from './usecase/output.supply';

@Injectable()
export class SuppliesService {
  private _supplies: Supply[] = [];

  constructor(
    private readonly createSupplyUsecase: CreateSupplyUsecase,
    private readonly findAllUsecase: FindAllUsecase,
    private readonly findByIdUsecase: FindByIdUsecase,
    private readonly updateSupplyUsecase: UpdateSupplyUsecase,
    private readonly deleteSupplyUsecase: DeleteSupplyUsecase,
    private readonly supplyEntryUsecase: SupplyEntryUsecase,
    private readonly supplyOutputUsecase: SupplyOutputUsecase,
  ) {}

  async create(supply: CreateSupplyDto): Promise<string> {
    await this.createSupplyUsecase.execute(supply);
    return 'Insumo criado com sucesso';
  }

  async findAll(): Promise<Supply[] | string> {
    return await this.findAllUsecase.execute();
  }

  async findOne(id: string): Promise<Supply> {
    return this.findByIdUsecase.execute(id);
  }

  async update(id: string, supply: UpdateSupplyDto): Promise<string> {
    await this.updateSupplyUsecase.execute(id, supply);
    return 'Insumo atualizado com sucesso';
  }

  async remove(id: string): Promise<string> {
    await this.deleteSupplyUsecase.execute(id);
    return 'Insumo deletado com sucesso';
  }

  async supplyOutput(id: string, amount: number): Promise<boolean> {
    return await this.supplyOutputUsecase.execute(id, amount);
  }

  async supplyEntry(id: string, amount: number): Promise<boolean> {
    return await this.supplyEntryUsecase.execute(id, amount);
  }
}
