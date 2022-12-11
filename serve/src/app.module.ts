import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { ProfileModule } from './profile/profile.module';
import { SupplyEntryModule } from './supply-entry/supply-entry.module';
import { SupplyOutputModule } from './supply-output/supply-output.module';
import { SuppliesModule } from './supplies/supplies.module';

// @Module({
//   imports: [UserModule, ProfileModule, SupplyEntryModule, SupplyOutputModule, SuppliesModule],
// })

@Module({
  imports: [UserModule, ProfileModule, SuppliesModule, SupplyEntryModule],
})
export class AppModule {}
