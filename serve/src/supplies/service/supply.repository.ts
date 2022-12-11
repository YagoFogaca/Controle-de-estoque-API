import { PrismaService } from 'src/prisma/prisma.service';
import { Supply } from '../entities/supply.entity';
import { UpdateSupplyDto } from './dto/update-supply.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class SupplyRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async create(supply: Supply): Promise<Supply> {
    return await this.prismaService.supply.create({ data: supply });
  }

  async findAll(): Promise<Supply[]> {
    return await this.prismaService.supply.findMany();
  }

  async findById(id: string): Promise<Supply> {
    return await this.prismaService.supply.findFirst({
      where: { id: id },
    });
  }

  async findByName(name: string): Promise<Supply> {
    return await this.prismaService.supply.findFirst({ where: { name: name } });
  }

  async update(id: string, supply: UpdateSupplyDto): Promise<Supply> {
    return await this.prismaService.supply.update({
      where: { id: id },
      data: supply,
    });
  }

  async delete(id: string): Promise<Supply> {
    return await this.prismaService.supply.delete({ where: { id: id } });
  }
}
