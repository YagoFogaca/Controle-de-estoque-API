import { Module } from '@nestjs/common';
import { UserController } from './user/user.controller';
import { UserService } from './user/service/user.service';
import { DataBaseModule } from './prisma/database.module';

@Module({
  imports: [DataBaseModule],
  controllers: [UserController],
  providers: [UserService],
})
export class AppModule {}
