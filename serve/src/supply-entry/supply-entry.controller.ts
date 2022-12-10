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

  // @Get('/find-one/:id')
  // findOne(@Param('id') id: string) {
  //   return this.supplyEntryService.findOne(id);
  // }

  // @Patch('/update/:id')
  // update(
  //   @Param('id') id: string,
  //   @Body() updateSupplyEntryDto: UpdateSupplyEntryDto,
  // ) {
  //   return this.supplyEntryService.update(id, updateSupplyEntryDto);
  // }

  // @Delete('/delete/:id')
  // remove(@Param('id') id: string) {
  //   return this.supplyEntryService.remove(id);
  // }
}
