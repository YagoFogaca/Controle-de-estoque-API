import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ProfileService } from './service/profile.service';
import { CreateProfileDto } from './service/dto/create-profile.dto';
import { UpdateProfileDto } from './service/dto/update-profile.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Profiles')
@Controller('/profile')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @Post('/create')
  create(@Body() createProfileDto: CreateProfileDto) {
    try {
      return this.profileService.create(createProfileDto);
    } catch (error) {
      console.log(error);
    }
  }

  @Get('/find-all')
  findAll() {
    try {
      return this.profileService.findAll();
    } catch (error) {
      console.log(error);
    }
  }

  @Get('/find-one/:id')
  findOne(@Param('id') id: string) {
    try {
      return this.profileService.findOne(id);
    } catch (error) {
      console.log(error);
    }
  }

  @Patch('/update/:id')
  update(@Param('id') id: string, @Body() updateProfileDto: UpdateProfileDto) {
    try {
      return this.profileService.update(id, updateProfileDto);
    } catch (error) {
      console.log(error);
    }
  }

  @Delete('/delete/:id')
  remove(@Param('id') id: string) {
    try {
      return this.profileService.remove(id);
    } catch (error) {
      console.log(error);
    }
  }
}
