import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/service/user.service';
import { AuthDto } from './dto/auth.dto';
import * as bcrypt from 'bcrypt';
import { IUserEntity } from 'src/user/entities/user.entity';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser({ email, password }: AuthDto) {
    const user = await this.userService.login(email);
    const passwordValidated = bcrypt.compareSync(password, user.password);
    if (!passwordValidated) {
      throw new Error('Senha invalida');
    }

    delete user.password;

    return {
      token: this.jwtService.sign(user),
      user: user,
    };
  }

  async getUser(email: string): Promise<IUserEntity> {
    try {
      return await this.userService.login(email);
    } catch (error) {
      console.log(error);
    }
  }
}
