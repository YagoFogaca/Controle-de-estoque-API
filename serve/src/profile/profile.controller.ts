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
import { ProfileService } from './service/profile.service';
import { CreateProfileDto } from './service/dto/create-profile.dto';
import { UpdateProfileDto } from './service/dto/update-profile.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Profiles')
@Controller('/profile')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @Post('/create')
  async create(
    @Body() createProfileDto: CreateProfileDto,
    @Res() res: Response,
  ) {
    try {
      res.status(201).send(await this.profileService.create(createProfileDto));
    } catch (error) {
      console.log(error);
      res.status(400).send(error.message);
    }
  }

  @Get('/find-all')
  async findAll(@Res() res: Response) {
    try {
      res.status(200).send(await this.profileService.findAll());
    } catch (error) {
      console.log(error);
      res.status(404).send(error.message);
    }
  }

  @Get('/find-one/:id')
  async findOne(@Param('id') id: string, @Res() res: Response) {
    try {
      res.status(200).send(await this.profileService.findOne(id));
    } catch (error) {
      console.log(error);
      res.status(404).send(error.message);
    }
  }

  @Patch('/update/:id')
  async update(
    @Param('id') id: string,
    @Body() updateProfileDto: UpdateProfileDto,
    @Res() res: Response,
  ) {
    try {
      res
        .status(200)
        .send(await this.profileService.update(id, updateProfileDto));
    } catch (error) {
      console.log(error);
      res.status(400).send(error.message);
    }
  }

  @Delete('/delete/:id')
  async remove(@Param('id') id: string, @Res() res: Response) {
    try {
      res.status(200).send(await this.profileService.remove(id));
    } catch (error) {
      console.log(error);
      res.status(400).send(error.message);
    }
  }
}
