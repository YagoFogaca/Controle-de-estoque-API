import { Module } from '@nestjs/common';
import { ProfileService } from './service/profile.service';
import { ProfileController } from './profile.controller';
import { DataBaseModule } from 'src/prisma/database.module';
import { ProfileRepository } from './service/profile.repository';

@Module({
  imports: [DataBaseModule],
  controllers: [ProfileController],
  providers: [ProfileService, ProfileRepository],
})
export class ProfileModule {}
