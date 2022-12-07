import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Res,
} from '@nestjs/common';
import { Response } from 'express';
import { SuppliesService } from './service/supplies.service';
import { CreateSupplyDto } from './service/dto/create-supply.dto';
import { UpdateSupplyDto } from './service/dto/update-supply.dto';

@Controller('/supplies')
export class SuppliesController {
  constructor(private readonly suppliesService: SuppliesService) {}

  @Post('/create')
  async create(@Body() createSupplyDto: CreateSupplyDto, @Res() res: Response) {
    try {
      res.status(201).send(await this.suppliesService.create(createSupplyDto));
    } catch (error) {
      console.log(error);
      res.status(400).send(error.message);
    }
  }

  @Get('/find-all')
  async findAll(@Res() res: Response) {
    try {
      res.status(200).send(await this.suppliesService.findAll());
    } catch (error) {
      console.log(error);
      res.status(404).send(error.message);
    }
  }

  @Get('/find-one/:id')
  async findOne(@Param('id') id: string, @Res() res: Response) {
    try {
      res.status(200).send(await this.suppliesService.findOne(id));
    } catch (error) {
      console.log(error);
      res.status(404).send(error.message);
    }
  }

  @Patch('/update/:id')
  async update(
    @Param('id') id: string,
    @Body() updateSupplyDto: UpdateSupplyDto,
    @Res() res: Response,
  ) {
    try {
      res
        .status(200)
        .send(await this.suppliesService.update(id, updateSupplyDto));
    } catch (error) {
      console.log(error);
      res.status(400).send(error.message);
    }
  }

  @Delete('/delete/:id')
  async remove(@Param('id') id: string, @Res() res: Response) {
    try {
      res.status(200).send(await this.suppliesService.remove(id));
    } catch (error) {
      console.log(error);
      res.status(400).send(error.message);
    }
  }
}
