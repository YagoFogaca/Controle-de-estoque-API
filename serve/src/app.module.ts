import { Module } from '@nestjs/common';
import { UserController } from './user/user.controller';
import { UserService } from './user/service/user.service';
import { DataBaseModule } from './prisma/database.module';
import { UserRepository } from './user/user.repository';

@Module({
  imports: [DataBaseModule],
  controllers: [UserController],
  providers: [UserService, UserRepository],
})
export class AppModule {}
