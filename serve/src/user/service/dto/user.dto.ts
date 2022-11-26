import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsEmail, IsNotEmpty } from 'class-validator';

export class UserDto {
  @ApiProperty({
    description: 'Email para acesso a aplicação',
    example: 'fulanodetal@gmail.com',
  })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    description: 'Nome para identificação na aplicação',
    example: 'fulano de tal',
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    description: 'Senha para acessar a aplicação',
    example: 'supersenha',
  })
  @IsString()
  @IsNotEmpty()
  password: string;

  @ApiProperty({
    description: 'CPF para registro na aplicação',
    example: '12345678910',
  })
  @IsString()
  @IsNotEmpty()
  cpf: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  role: string;
}
