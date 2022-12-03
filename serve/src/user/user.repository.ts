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
    return await this.prisma.user.findFirst({ where: { id: id } });
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

  async getByEmail(email: string): Promise<boolean> {
    const verifyEmail = await this.prisma.user.findFirst({
      where: { email: email },
    });

    if (!verifyEmail) {
      return true;
    }

    return false;
  }

  async getByCpf(cpf: string): Promise<boolean> {
    const verifyCpf = await this.prisma.user.findFirst({
      where: { cpf: cpf },
    });
    if (!verifyCpf) {
      return true;
    }

    return false;
  }
}