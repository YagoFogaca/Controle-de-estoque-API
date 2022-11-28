import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Res,
} from '@nestjs/common';
import { PartialUserDto } from './service/dto/partialUser.dto';
import { UserDto } from './service/dto/user.dto';
import { UserService } from './service/user.service';
import { Response } from 'express';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Users')
@Controller('/users')
export class UserController {
  constructor(private readonly service: UserService) {}

  @Get('/')
  async getAllUsers(@Res() res: Response) {
    try {
      const users = await this.service.getAll();
      res.status(200).send(users);
    } catch (error) {
      console.log(error);
      res.status(404).send(error.message);
    }
  }

  @Get('/get-user/:id')
  async getByIdUser(@Param('id') id: string, @Res() res: Response) {
    try {
      const user = await this.service.getById(id);
      res.status(200).send(user);
    } catch (error) {
      console.log(error);
      res.status(404).send(error.message);
    }
  }

  @Post('/create-user')
  async createUser(@Body() user: UserDto, @Res() res: Response) {
    try {
      const userCreate = await this.service.create(user);
      res.status(201).send(userCreate);
    } catch (error) {
      console.log(error);
      res.status(400).send(error.message);
    }
  }

  @Patch('/update-user/:id')
  async updateUser(
    @Body() user: PartialUserDto,
    @Param('id') id: string,
    @Res() res: Response,
  ) {
    try {
      const userUpdate = await this.service.update(user, id);
      res.status(200).send(userUpdate);
    } catch (error) {
      console.log(error);
      res.status(400).send(error.meta.target[0] + ' já registrado');
    }
  }

  @Delete('/delete-user/:id')
  async deleteUser(@Param('id') id: string, @Res() res: Response) {
    try {
      const user = await this.service.delete(id);
      res.status(200).send(user);
    } catch (error) {
      console.log(error);
      res.status(404).send(error.message);
    }
  }
}
