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
      include: {
        supply: { select: { name: true } },
      },
    });
  }

  async findById(id: string): Promise<SupplyEntry> {
    return await this.prismaService.supply_entry.findFirst({
      where: { id: id },
      include: {
        profile: true,
        supply: true,
      },
    });
  }

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
      include: {
        supply: true,
      },
    });
  }
}
