import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SupplyOutputService } from './supply-output.service';
import { CreateSupplyOutputDto } from './dto/create-supply-output.dto';
import { UpdateSupplyOutputDto } from './dto/update-supply-output.dto';

@Controller('supply-output')
export class SupplyOutputController {
  constructor(private readonly supplyOutputService: SupplyOutputService) {}

  @Post()
  create(@Body() createSupplyOutputDto: CreateSupplyOutputDto) {
    return this.supplyOutputService.create(createSupplyOutputDto);
  }

  @Get()
  findAll() {
    return this.supplyOutputService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.supplyOutputService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSupplyOutputDto: UpdateSupplyOutputDto) {
    return this.supplyOutputService.update(+id, updateSupplyOutputDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.supplyOutputService.remove(+id);
  }
}
