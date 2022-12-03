import { Module } from '@nestjs/common';
import { SupplyEntryService } from './supply-entry.service';
import { SupplyEntryController } from './supply-entry.controller';

@Module({
  controllers: [SupplyEntryController],
  providers: [SupplyEntryService]
})
export class SupplyEntryModule {}
