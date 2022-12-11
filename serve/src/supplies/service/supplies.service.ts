import { Injectable } from '@nestjs/common';
import { CreateSupplyDto } from './dto/create-supply.dto';
import { UpdateSupplyDto } from './dto/update-supply.dto';
import { Supply } from '../entities/supply.entity';
import { CreateSupplyUsecase } from './usecase/create.supply';
import { FindAllUsecase } from './usecase/findAll.supply';
import { FindByIdUsecase } from './usecase/findById.supply';
import { DeleteSupplyUsecase } from './usecase/delete.supply';
import { UpdateSupplyUsecase } from './usecase/update.supply';

@Injectable()
export class SuppliesService {
  private _supplies: Supply[] = [];

  constructor(
    private readonly createSupplyUsecase: CreateSupplyUsecase,
    private readonly findAllUsecase: FindAllUsecase,
    private readonly findByIdUsecase: FindByIdUsecase,
    private readonly updateSupplyUsecase: UpdateSupplyUsecase,
    private readonly deleteSupplyUsecase: DeleteSupplyUsecase,
  ) {}

  async create(supply: CreateSupplyDto): Promise<string> {
    await this.createSupplyUsecase.execute(supply);
    return 'Insumo criado com sucesso';
  }

  async findAll(): Promise<Supply[]> {
    return await this.findAllUsecase.execute();
  }

  async findOne(id: string): Promise<Supply> {
    return this.findByIdUsecase.execute(id);
  }

  async update(id: string, supply: UpdateSupplyDto): Promise<string> {
    await this.updateSupplyUsecase.execute(id, supply);
    return 'Insumo atualizado com sucesso';
  }

  // async supplyOutput(id: string, output_quantity: number) {
  //   const supply = await this.findOne(id);

  //   supply.output_quantity += output_quantity;
  //   supply.quantity_stock -= output_quantity;

  //   this._supplies.map((findSupply, index) => {
  //     if (findSupply.id === id) {
  //       this._supplies.splice(index, 1, supply);
  //     }
  //   });
  //   return 'Insumo atualizado com sucesso';
  // }

  async supplyEntry(id: string, amount: number): Promise<boolean> {
    try {
      const supply = await this.findByIdUsecase.execute(id);
      supply.quantity_stock += amount;

      await this.updateSupplyUsecase.execute(id, {
        quantity_stock: supply.quantity_stock,
      });

      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  async remove(id: string): Promise<string> {
    await this.deleteSupplyUsecase.execute(id);
    return 'Insumo deletado com sucesso';
  }
}
