import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { ProfileModule } from './profile/profile.module';
import { SupplyEntryModule } from './supply-entry/supply-entry.module';
import { SuppliesModule } from './supplies/supplies.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    AuthModule,
    UserModule,
    ProfileModule,
    SuppliesModule,
    SupplyEntryModule,
  ],
})
export class AppModule {}
