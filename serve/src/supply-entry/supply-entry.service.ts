import { Injectable } from '@nestjs/common';
import { CreateSupplyEntryDto } from './dto/create-supply-entry.dto';
import { UpdateSupplyEntryDto } from './dto/update-supply-entry.dto';

@Injectable()
export class SupplyEntryService {
  create(createSupplyEntryDto: CreateSupplyEntryDto) {
    return 'This action adds a new supplyEntry';
  }

  findAll() {
    return `This action returns all supplyEntry`;
  }

  findOne(id: number) {
    return `This action returns a #${id} supplyEntry`;
  }

  update(id: number, updateSupplyEntryDto: UpdateSupplyEntryDto) {
    return `This action updates a #${id} supplyEntry`;
  }

  remove(id: number) {
    return `This action removes a #${id} supplyEntry`;
  }
}
