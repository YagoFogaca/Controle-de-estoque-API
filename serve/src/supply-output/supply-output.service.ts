import { Injectable } from '@nestjs/common';
import { CreateSupplyOutputDto } from './dto/create-supply-output.dto';
import { UpdateSupplyOutputDto } from './dto/update-supply-output.dto';

@Injectable()
export class SupplyOutputService {
  create(createSupplyOutputDto: CreateSupplyOutputDto) {
    return 'This action adds a new supplyOutput';
  }

  findAll() {
    return `This action returns all supplyOutput`;
  }

  findOne(id: number) {
    return `This action returns a #${id} supplyOutput`;
  }

  update(id: number, updateSupplyOutputDto: UpdateSupplyOutputDto) {
    return `This action updates a #${id} supplyOutput`;
  }

  remove(id: number) {
    return `This action removes a #${id} supplyOutput`;
  }
}
