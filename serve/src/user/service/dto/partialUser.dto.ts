import { PartialType } from '@nestjs/swagger';
import { UserDto } from './user.dto';

export class PartialUserDto extends PartialType(UserDto) {}
