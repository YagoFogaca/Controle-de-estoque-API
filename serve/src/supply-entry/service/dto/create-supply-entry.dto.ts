import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateSupplyEntryDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  supplyId: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  profileId: string;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  amount: number;
}
