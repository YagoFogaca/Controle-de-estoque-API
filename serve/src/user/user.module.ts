import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './service/user.service';
import { DataBaseModule } from 'src/prisma/database.module';
import { UserRepository } from './user.repository';

@Module({
  imports: [DataBaseModule],
  controllers: [UserController],
  providers: [UserService, UserRepository],
})
export class UserModule {}
