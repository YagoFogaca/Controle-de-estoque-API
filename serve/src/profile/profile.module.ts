import { Module } from '@nestjs/common';
import { ProfileService } from './service/profile.service';
import { ProfileController } from './profile.controller';
import { DataBaseModule } from 'src/prisma/database.module';
import { ProfileRepository } from './service/profile.repository';
import { UserModule } from 'src/user/user.module';

@Module({
  imports: [DataBaseModule, UserModule],
  controllers: [ProfileController],
  providers: [ProfileService, ProfileRepository],
  exports: [ProfileService],
})
export class ProfileModule {}
