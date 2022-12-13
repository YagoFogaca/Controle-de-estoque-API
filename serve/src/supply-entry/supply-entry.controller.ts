import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  Res,
  UseGuards,
} from '@nestjs/common';
import { Response } from 'express';
import { SupplyEntryService } from './service/supply-entry.service';
import { CreateSupplyEntryDto } from './service/dto/create-supply-entry.dto';
import { UpdateSupplyEntryDto } from './service/dto/update-supply-entry.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';

@ApiTags('Supply Entry')
@Controller('/supply-entry')
export class SupplyEntryController {
  constructor(private readonly supplyEntryService: SupplyEntryService) {}

  @UseGuards(AuthGuard())
  @ApiBearerAuth()
  @Post('/create')
  async create(
    @Query('id_profile') id_profile: string,
    @Body() createSupplyEntryDto: CreateSupplyEntryDto,
    @Res() res: Response,
  ) {
    try {
      res
        .status(201)
        .send(
          await this.supplyEntryService.create(
            createSupplyEntryDto,
            id_profile,
          ),
        );
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
      res.status(200).send(await this.supplyEntryService.findAll());
    } catch (error) {
      console.log(error);
      res.status(404).send(error.message);
    }
  }

  @UseGuards(AuthGuard())
  @ApiBearerAuth()
  @Get('/find-one/:id')
  async findById(@Param('id') id: string, @Res() res: Response) {
    try {
      res.status(200).send(await this.supplyEntryService.findById(id));
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
    @Body() updateSupplyEntryDto: UpdateSupplyEntryDto,
    @Res() res: Response,
  ) {
    try {
      res
        .status(200)
        .send(await this.supplyEntryService.update(id, updateSupplyEntryDto));
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
      res.status(200).send(await this.supplyEntryService.remove(id));
    } catch (error) {
      console.log(error);
      res.status(400).send(error.message);
    }
  }
}
