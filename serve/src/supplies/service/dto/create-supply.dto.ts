import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsNumber, IsBoolean } from 'class-validator';
import { UnitySupply } from '../../../utils/enuns/enum';

export class CreateSupplyDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'O campo não pode ser vazio' })
  @IsString()
  name: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'O campo não pode ser vazio' })
  @IsString({ message: '' })
  unity: UnitySupply;

  @ApiProperty()
  @IsNotEmpty({ message: 'O campo não pode ser vazio' })
  @IsNumber()
  quantity_stock: number;

  @ApiProperty()
  @IsNotEmpty({ message: 'O campo não pode ser vazio' })
  @IsNumber()
  output_quantity: number;

  @ApiProperty()
  @IsNotEmpty({ message: 'O campo não pode ser vazio' })
  @IsBoolean({ message: 'O campo só receber valores do tipo boolean' })
  active: boolean;
}
