import { Controller, Get, Query, Res, UseGuards } from '@nestjs/common';
import { HomepageService } from './homepage.service';
import { Response } from 'express';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';

@ApiTags('Homepage')
@Controller('/homepage')
export class HomepageController {
  constructor(private readonly homepageService: HomepageService) {}

  @UseGuards(AuthGuard())
  @ApiBearerAuth()
  @Get('/user')
  async findAllByIdUser(@Query('id') id: string, @Res() res: Response) {
    try {
      res.status(200).send(await this.homepageService.findAllByIdUser(id));
    } catch (error) {
      console.log(error);
      res.status(404).send(error.message);
    }
  }

  @UseGuards(AuthGuard())
  @ApiBearerAuth()
  @Get('/profile')
  async findAllByIdProfile(@Query('id') id: string, @Res() res: Response) {
    try {
      res.status(200).send(await this.homepageService.findAllByIdProfile(id));
    } catch (error) {
      console.log(error);
      res.status(404).send(error.message);
    }
  }
}
