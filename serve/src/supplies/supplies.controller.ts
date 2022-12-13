import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Res,
  UseGuards,
} from '@nestjs/common';
import { Response } from 'express';
import { SuppliesService } from './service/supplies.service';
import { CreateSupplyDto } from './service/dto/create-supply.dto';
import { UpdateSupplyDto } from './service/dto/update-supply.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';

@ApiTags('Supply')
@Controller('/supplies')
export class SuppliesController {
  constructor(private readonly suppliesService: SuppliesService) {}

  @UseGuards(AuthGuard())
  @ApiBearerAuth()
  @Post('/create')
  async create(@Body() createSupplyDto: CreateSupplyDto, @Res() res: Response) {
    try {
      res.status(201).send(await this.suppliesService.create(createSupplyDto));
    } catch (error) {
      console.log(error);
      res.status(400).send(error.message);
    }
  }

  @UseGuards(AuthGuard())
  @ApiBearerAuth()
  @Get('/find-all')
  async findAll(@Res() res: Response) {
    try {
      res.status(200).send(await this.suppliesService.findAll());
    } catch (error) {
      console.log(error);
      res.status(404).send(error.message);
    }
  }

  @UseGuards(AuthGuard())
  @ApiBearerAuth()
  @Get('/find-one/:id')
  async findOne(@Param('id') id: string, @Res() res: Response) {
    try {
      res.status(200).send(await this.suppliesService.findById(id));
    } catch (error) {
      console.log(error);
      res.status(404).send(error.message);
    }
  }

  @UseGuards(AuthGuard())
  @ApiBearerAuth()
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

  @UseGuards(AuthGuard())
  @ApiBearerAuth()
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
