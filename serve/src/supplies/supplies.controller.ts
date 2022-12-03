import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SuppliesService } from './supplies.service';
import { CreateSupplyDto } from './dto/create-supply.dto';
import { UpdateSupplyDto } from './dto/update-supply.dto';

@Controller('/supplies')
export class SuppliesController {
  constructor(private readonly suppliesService: SuppliesService) {}

  @Post('/create')
  create(@Body() createSupplyDto: CreateSupplyDto) {
    return this.suppliesService.create(createSupplyDto);
  }

  @Get('/get-all')
  findAll() {
    return this.suppliesService.findAll();
  }

  @Get('/get-one/:id')
  findOne(@Param('id') id: string) {
    return this.suppliesService.findOne(id);
  }

  @Patch('/update/:id')
  update(@Param('id') id: string, @Body() updateSupplyDto: UpdateSupplyDto) {
    return this.suppliesService.update(id, updateSupplyDto);
  }

  // Essas duas funções não teram endpoint, somente para entry e output

  @Patch('/update-output/:id')
  supplyOutput(
    @Param('id') id: string,
    @Body() updateSupplyDto: UpdateSupplyDto,
  ) {
    return this.suppliesService.supplyOutput(
      id,
      updateSupplyDto.output_quantity,
    );
  }

  @Patch('/update-input/:id')
  supplyInput(
    @Param('id') id: string,
    @Body() updateSupplyDto: UpdateSupplyDto,
  ) {
    return this.suppliesService.supplyInput(
      id,
      updateSupplyDto.output_quantity,
    );
  }

  @Delete('/delete/:id')
  remove(@Param('id') id: string) {
    return this.suppliesService.remove(id);
  }
}
