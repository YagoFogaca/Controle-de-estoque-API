import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { IUserEntity } from './entities/user.entity';

@Injectable()
export class UserRepository {
  constructor(private readonly prisma: PrismaService) {}

  async getAll(): Promise<IUserEntity[]> {
    return await this.prisma.user.findMany();
  }

  async getById(id: string): Promise<IUserEntity> {
    // testar esse e o findFirst
    return await this.prisma.user.findFirstOrThrow({ where: { id: id } });
  }

  async create(user: IUserEntity): Promise<IUserEntity> {
    return await this.prisma.user.create({ data: user });
  }

  async update(user: IUserEntity, id: string): Promise<IUserEntity> {
    return await this.prisma.user.update({ data: user, where: { id: id } });
  }

  async delete(id: string): Promise<IUserEntity> {
    return await this.prisma.user.delete({ where: { id: id } });
  }
}
