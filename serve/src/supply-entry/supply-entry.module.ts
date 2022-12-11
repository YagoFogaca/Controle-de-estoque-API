import { Module } from '@nestjs/common';
import { DataBaseModule } from 'src/prisma/database.module';
import { ProfileModule } from 'src/profile/profile.module';
import { ProfileService } from 'src/profile/service/profile.service';
import { SuppliesService } from 'src/supplies/service/supplies.service';
import { SuppliesModule } from 'src/supplies/supplies.module';
import { SupplyEntryRepository } from './service/supply-entry.respository';
import { SupplyEntryService } from './service/supply-entry.service';
import { CreateSupplyEntryUsecase } from './service/usecase/create.supply-entry';
import { DeleteSupplyUsecase } from './service/usecase/delete.supply-entry';
import { FindAllSupplyEntryUsecase } from './service/usecase/find-all.supply-entry';
import { FindByIdUsecase } from './service/usecase/findById.supply-entry';
import { SupplyEntryController } from './supply-entry.controller';

@Module({
  imports: [DataBaseModule, SuppliesModule, ProfileModule],
  controllers: [SupplyEntryController],
  providers: [
    SupplyEntryService,
    SupplyEntryRepository,
    CreateSupplyEntryUsecase,
    FindAllSupplyEntryUsecase,
    FindByIdUsecase,
    DeleteSupplyUsecase,
  ],
})
export class SupplyEntryModule {}
