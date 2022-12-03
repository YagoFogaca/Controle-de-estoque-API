import { PartialType } from '@nestjs/swagger';
import { CreateSupplyEntryDto } from './create-supply-entry.dto';

export class UpdateSupplyEntryDto extends PartialType(CreateSupplyEntryDto) {}
