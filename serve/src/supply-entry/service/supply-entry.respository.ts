import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { SupplyEntry } from '../entities/supply-entry.entity';
import { UpdateSupplyEntryDto } from './dto/update-supply-entry.dto';

@Injectable()
export class SupplyEntryRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async create(supplyEntry: SupplyEntry): Promise<SupplyEntry> {
    return await this.prismaService.supply_entry.create({ data: supplyEntry });
  }

  async findAll(): Promise<SupplyEntry[]> {
    return await this.prismaService.supply_entry.findMany({
      select: {
        id: true,
        supplyId: true,
        profileId: true,
        name_supply: true,
        amount: true,
        entry_date: true,
        unity: true,
        supply: true,
      },
    });
  }

  async findById(id: string): Promise<SupplyEntry> {
    return await this.prismaService.supply_entry.findFirst({
      where: { id: id },
      select: {
        id: true,
        supplyId: true,
        profileId: true,
        name_supply: true,
        amount: true,
        entry_date: true,
        unity: true,
        supply: true,
        profile: true,
      },
    });
  }

  //   async findByName(name: string): Promise<SupplyEntry> {
  //     return await this.prismaService.supply_entry.findFirst({
  //       where: { name: name },
  //     });
  //   }

  async update(
    id: string,
    supplyEntry: UpdateSupplyEntryDto,
  ): Promise<SupplyEntry> {
    return await this.prismaService.supply_entry.update({
      where: { id: id },
      data: supplyEntry,
    });
  }

  async delete(id: string): Promise<SupplyEntry> {
    return await this.prismaService.supply_entry.delete({
      where: { id: id },
      select: {
        id: true,
        supplyId: true,
        profileId: true,
        name_supply: true,
        amount: true,
        entry_date: true,
        unity: true,
      },
    });
  }
}
// id: string;
// profileId: string;
// supplyId: string;
// name_supply: string;
// amount: number;
// unity: string;
// entry_date: Date;
// }
