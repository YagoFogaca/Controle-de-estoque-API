import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
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
import { UpdateSupplyUsecase } from './service/usecase/update.supply';
import { SupplyEntryController } from './supply-entry.controller';

@Module({
  imports: [
    DataBaseModule,
    SuppliesModule,
    ProfileModule,
    PassportModule.register({ defaultStrategy: 'jwt' }),
  ],
  controllers: [SupplyEntryController],
  providers: [
    SupplyEntryService,
    SupplyEntryRepository,
    CreateSupplyEntryUsecase,
    FindAllSupplyEntryUsecase,
    FindByIdUsecase,
    UpdateSupplyUsecase,
    DeleteSupplyUsecase,
  ],
})
export class SupplyEntryModule {}
