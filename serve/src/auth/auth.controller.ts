import { Controller } from '@nestjs/common';
import { Body, Get, Post, Req, UseGuards } from '@nestjs/common/decorators';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { UserService } from 'src/user/service/user.service';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';
import { Request } from 'express';
import { IsAdminAuthorization } from './decorators/admin.decorator';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService,
  ) {}

  @Post('/login')
  async login(@Body() user: AuthDto) {
    return await this.authService.validateUser(user);
  }

  @Get()
  @UseGuards(AuthGuard(), IsAdminAuthorization)
  @ApiBearerAuth()
  async getUser(@Req() req: Request) {
    return await this.userService.getAll();
  }
}
//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImFhYjBlNDE5LTcxNWQtNDczMy05YjQ3LTVkOWM2Nzk0NDM2OSIsIm5hbWUiOiJCcmVuZMOjbyBCb2xhZMOjbyIsImVtYWlsIjoiYnJlbmRhQGdtYWlsLmNvbSIsImNwZiI6IjEyMzQ1Njc4OTExIiwicm9sZSI6InByb2ZpbGUiLCJpYXQiOjE2NzA4OTQ1NzgsImV4cCI6MTY3MDkzNzc3OH0.h5aeQRKsiz2j6xiPULU1MpcIoqJE1vArL_QzNW-znLc
