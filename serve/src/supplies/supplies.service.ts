import { Injectable } from '@nestjs/common';
import { CreateSupplyDto } from './dto/create-supply.dto';
import { UpdateSupplyDto } from './dto/update-supply.dto';
import { ISupply } from './entities/supply.entity';
import { SupplyEntity } from './entities/supplyValidation.entity';

@Injectable()
export class SuppliesService {
  private _supplies: ISupply[] = [];

  constructor(private readonly SupplyRepository) {}

  async create(supply: CreateSupplyDto): Promise<string> {
    // const verificationNameSupply = await this.SupplyRepository.findOneName(
    //   supply.name,
    // );
    // if (verificationNameSupply) {
    //   throw new Error('Um insumo já foi registrado com esse nome.');
    // }

    const verificationSupply = new SupplyEntity(supply);
    const supplyCreated = this._supplies.push(
      verificationSupply.verifySupply(),
    );
    return 'Insumo criado com sucesso';
  }

  async findAll(): Promise<ISupply[]> {
    return this._supplies;
  }

  async findOne(id: string): Promise<ISupply> {
    const supply = this._supplies.find((supply) => id === supply.id);
    if (!supply) {
      throw new Error('O insumo não foi encontrado.');
    }
    return supply;
  }

  async update(id: string, supply: UpdateSupplyDto): Promise<string> {
    const findOne = await this.findOne(id);

    const updateSupply = Object.assign(findOne, supply);
    this._supplies.map((findSupply, index) => {
      if (findSupply.id === id) {
        this._supplies.splice(index, 1, updateSupply);
      }
    });
    return 'Insumo atualizado com sucesso';
  }

  async supplyOutput(id: string, output_quantity: number) {
    const supply = await this.findOne(id);

    supply.output_quantity += output_quantity;
    supply.quantity_stock -= output_quantity;

    this._supplies.map((findSupply, index) => {
      if (findSupply.id === id) {
        this._supplies.splice(index, 1, supply);
      }
    });
    return 'Insumo atualizado com sucesso';
  }

  async supplyInput(id: string, amount: number) {
    const supply = await this.findOne(id);

    supply.quantity_stock += amount;

    this._supplies.map((findSupply, index) => {
      if (findSupply.id === id) {
        this._supplies.splice(index, 1, supply);
      }
    });
    return 'Insumo atualizado com sucesso';
  }

  async remove(id: string): Promise<string> {
    this._supplies.map((findSupply, index) => {
      if (findSupply.id === id) {
        this._supplies.splice(index, 1);
      }
    });
    return 'Insumo deletado com sucesso';
  }
}
