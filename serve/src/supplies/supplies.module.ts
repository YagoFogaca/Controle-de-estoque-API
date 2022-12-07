import { Module } from '@nestjs/common';
import { DataBaseModule } from 'src/prisma/database.module';
import { SuppliesService } from './service/supplies.service';
import { SupplyRepository } from './service/supply.repository';
import { CreateSupplyUsecase } from './service/usecase/create.supply';
import { DeleteSupplyUsecase } from './service/usecase/delete.supply';
import { FindAllUsecase } from './service/usecase/findAll.supply';
import { FindByIdUsecase } from './service/usecase/findById.supply';
import { UpdateSupplyUsecase } from './service/usecase/update.supply';
import { SuppliesController } from './supplies.controller';

@Module({
  imports: [DataBaseModule],
  controllers: [SuppliesController],
  providers: [
    SuppliesService,
    CreateSupplyUsecase,
    FindAllUsecase,
    FindByIdUsecase,
    DeleteSupplyUsecase,
    UpdateSupplyUsecase,
    SupplyRepository,
  ],
})
export class SuppliesModule {}
