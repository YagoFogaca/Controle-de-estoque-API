import { Injectable } from '@nestjs/common';
import { SuppliesService } from 'src/supplies/supplies.service';
import { IdGenerator } from 'src/utils/id-generator/id-generator';
import { CreateSupplyEntryDto } from './dto/create-supply-entry.dto';
import { UpdateSupplyEntryDto } from './dto/update-supply-entry.dto';
import { SupplyEntry } from './entities/supply-entry.entity';
import { ProfileService } from '../profile/profile.service';

@Injectable()
export class SupplyEntryService {
  private _supply_entry: SupplyEntry[] = [];

  constructor(
    private readonly SuppliesService: SuppliesService,
    private readonly ProfileService: ProfileService,
  ) {}

  async create(
    supplyEntry: CreateSupplyEntryDto,
    id_profile: string,
  ): Promise<string> {
    // colcoar um entidade de validação dos campos
    const createSupplyEntry = {
      ...supplyEntry,
      id: IdGenerator.idGenerator(),
      id_profile,
    };

    // Verificação se o insumo existe e contabilização da quantidade de entrada daquele insumo
    await this.SuppliesService.supplyInput(
      createSupplyEntry.id_supply,
      createSupplyEntry.amount,
    );

    // Verificação se o profile existe
    await this.ProfileService.findOne(createSupplyEntry.id_profile);

    this._supply_entry.push(createSupplyEntry);
    return 'This action adds a new supplyEntry';
  }

  async findAll(): Promise<SupplyEntry[]> {
    return this._supply_entry;
  }

  async findOne(id: string): Promise<SupplyEntry> {
    const supplyEntry = this._supply_entry.find(
      (supply_entry) => id === supply_entry.id,
    );
    if (!supplyEntry) {
      throw new Error('A entrada de insumo não foi encontrado.');
    }
    return supplyEntry;
  }

  async update(id: string, supplyEntry: UpdateSupplyEntryDto): Promise<string> {
    // Colocar um verificação se a quatidade de entrada também foi alterada
    const findOne = await this.findOne(id);

    const updateSupplyEntry = Object.assign(findOne, supplyEntry);
    this._supply_entry.map((findSupply, index) => {
      if (findSupply.id === id) {
        this._supply_entry.splice(index, 1, updateSupplyEntry);
      }
    });
    return 'Entrada de insumo atualizada com sucesso';
  }

  async remove(id: string): Promise<string> {
    this._supply_entry.map((supplyEntry, index) => {
      if (supplyEntry.id === id) {
        this._supply_entry.splice(index, 1);
        this.SuppliesService.supplyOutput(
          supplyEntry.id_supply,
          supplyEntry.amount,
        );
      }
    });
    return 'Entrada de insumo deletada com sucesso';
  }
}
