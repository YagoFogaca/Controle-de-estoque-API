import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsEmail, IsNotEmpty } from 'class-validator';

export class UserDto {
  @ApiProperty({
    description: 'Email para acesso a aplicação',
    example: 'fulanodetal@gmail.com',
  })
  @IsEmail({ message: 'O EMAIL precisa ser do tipo string' })
  @IsNotEmpty({ message: 'O campo precisa ser preenchido' })
  email: string;

  @ApiProperty({
    description: 'Nome para identificação na aplicação',
    example: 'fulano de tal',
  })
  @IsString({ message: 'O NAME precisa ser do tipo string' })
  @IsNotEmpty({ message: 'O campo precisa ser preenchido' })
  name: string;

  @ApiProperty({
    description: 'Senha para acessar a aplicação',
    example: 'supersenha',
  })
  @IsString({ message: 'O PASSWORD precisa ser do tipo string' })
  @IsNotEmpty({ message: 'O campo precisa ser preenchido' })
  password: string;

  @ApiProperty({
    description: 'CPF para registro na aplicação',
    example: '12345678910',
  })
  @IsString({ message: 'O CPF precisa ser do tipo string' })
  @IsNotEmpty({ message: 'O campo precisa ser preenchido' })
  cpf: string;

  @ApiProperty({
    description: 'Role para controle de acesso ao aplicação',
    example: 'admin || profile',
  })
  @IsString({ message: 'O ROLE precisa ser do tipo string' })
  @IsNotEmpty({ message: 'O campo precisa ser preenchido' })
  role: string;
}
