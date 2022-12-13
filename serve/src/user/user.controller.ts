import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Res,
  UseGuards,
} from '@nestjs/common';
import { PartialUserDto } from './service/dto/partialUser.dto';
import { UserDto } from './service/dto/user.dto';
import { UserService } from './service/user.service';
import { Response } from 'express';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { IsAdminAuthorization } from 'src/auth/decorators/admin.decorator';

@ApiTags('Users')
@Controller('/users')
export class UserController {
  constructor(private readonly service: UserService) {}

  @UseGuards(AuthGuard(), IsAdminAuthorization)
  @ApiBearerAuth()
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

  @UseGuards(AuthGuard(), IsAdminAuthorization)
  @ApiBearerAuth()
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

  @UseGuards(AuthGuard(), IsAdminAuthorization)
  @ApiBearerAuth()
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
      if (error.code) {
        res.status(400).send(error.meta.target[0] + ' já registrado');
        return;
      }
      res.status(400).send(error.message);
    }
  }

  @UseGuards(AuthGuard(), IsAdminAuthorization)
  @ApiBearerAuth()
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
