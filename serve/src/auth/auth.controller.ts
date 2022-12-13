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
