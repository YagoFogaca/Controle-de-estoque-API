import { PartialType } from '@nestjs/swagger';
import { CreateSupplyOutputDto } from './create-supply-output.dto';

export class UpdateSupplyOutputDto extends PartialType(CreateSupplyOutputDto) {}
