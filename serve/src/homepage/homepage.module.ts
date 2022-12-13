import { Module } from '@nestjs/common';
import { DataBaseModule } from 'src/prisma/database.module';
import { UserModule } from 'src/user/user.module';
import { PassportModule } from '@nestjs/passport';
import { HomepageController } from './homepage.controller';
import { HomepageService } from './homepage.service';
import { ProfileModule } from 'src/profile/profile.module';

@Module({
  imports: [
    DataBaseModule,
    UserModule,
    ProfileModule,
    PassportModule.register({ defaultStrategy: 'jwt' }),
  ],
  controllers: [HomepageController],
  providers: [HomepageService],
})
export class HomepageModule {}
