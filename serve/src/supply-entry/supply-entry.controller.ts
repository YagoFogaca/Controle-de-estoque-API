import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { SupplyEntryService } from './supply-entry.service';
import { CreateSupplyEntryDto } from './dto/create-supply-entry.dto';
import { UpdateSupplyEntryDto } from './dto/update-supply-entry.dto';

@Controller('/supply-entry')
export class SupplyEntryController {
  constructor(private readonly supplyEntryService: SupplyEntryService) {}

  @Post('/create')
  create(
    @Query('id_profile') id_profile: string,
    @Body() createSupplyEntryDto: CreateSupplyEntryDto,
  ) {
    return this.supplyEntryService.create(createSupplyEntryDto, id_profile);
  }

  @Get('/find-all')
  findAll() {
    return this.supplyEntryService.findAll();
  }

  @Get('/find-one/:id')
  findOne(@Param('id') id: string) {
    return this.supplyEntryService.findOne(id);
  }

  @Patch('/update/:id')
  update(
    @Param('id') id: string,
    @Body() updateSupplyEntryDto: UpdateSupplyEntryDto,
  ) {
    return this.supplyEntryService.update(id, updateSupplyEntryDto);
  }

  @Delete('/delete/:id')
  remove(@Param('id') id: string) {
    return this.supplyEntryService.remove(id);
  }
}
