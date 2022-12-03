import { Module } from '@nestjs/common';
import { SupplyOutputService } from './supply-output.service';
import { SupplyOutputController } from './supply-output.controller';

@Module({
  controllers: [SupplyOutputController],
  providers: [SupplyOutputService]
})
export class SupplyOutputModule {}
