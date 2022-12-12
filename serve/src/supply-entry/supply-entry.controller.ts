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
import { SupplyEntryService } from './service/supply-entry.service';
import { CreateSupplyEntryDto } from './service/dto/create-supply-entry.dto';
import { UpdateSupplyEntryDto } from './service/dto/update-supply-entry.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Supply Entry')
@Controller('/supply-entry')
export class SupplyEntryController {
  constructor(private readonly supplyEntryService: SupplyEntryService) {}

  @Post('/create')
  async create(
    @Query('id_profile') id_profile: string,
    @Body() createSupplyEntryDto: CreateSupplyEntryDto,
  ) {
    console.log(id_profile);
    return await this.supplyEntryService.create(
      createSupplyEntryDto,
      id_profile,
    );
  }

  @Get('/find-all')
  async findAll() {
    return await this.supplyEntryService.findAll();
  }

  @Get('/find-one/:id')
  async findById(@Param('id') id: string) {
    return await this.supplyEntryService.findById(id);
  }

  @Patch('/update/:id')
  async update(
    @Param('id') id: string,
    @Body() updateSupplyEntryDto: UpdateSupplyEntryDto,
  ) {
    return await this.supplyEntryService.update(id, updateSupplyEntryDto);
  }

  @Delete('/delete/:id')
  remove(@Param('id') id: string) {
    return this.supplyEntryService.remove(id);
  }
}
