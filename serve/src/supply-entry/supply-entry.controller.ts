import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SupplyEntryService } from './supply-entry.service';
import { CreateSupplyEntryDto } from './dto/create-supply-entry.dto';
import { UpdateSupplyEntryDto } from './dto/update-supply-entry.dto';

@Controller('supply-entry')
export class SupplyEntryController {
  constructor(private readonly supplyEntryService: SupplyEntryService) {}

  @Post()
  create(@Body() createSupplyEntryDto: CreateSupplyEntryDto) {
    return this.supplyEntryService.create(createSupplyEntryDto);
  }

  @Get()
  findAll() {
    return this.supplyEntryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.supplyEntryService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSupplyEntryDto: UpdateSupplyEntryDto) {
    return this.supplyEntryService.update(+id, updateSupplyEntryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.supplyEntryService.remove(+id);
  }
}
