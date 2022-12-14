import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Profile } from '../entities/profile.entity';

@Injectable()
export class ProfileRepository {
  constructor(private readonly service: PrismaService) {}

  async create(profile: Profile): Promise<Profile> {
    return await this.service.profile.create({ data: profile });
  }

  async findAll(): Promise<Profile[]> {
    return await this.service.profile.findMany();
  }

  async findOne(id: string): Promise<Profile> {
    return await this.service.profile.findFirst({
      where: { id: id },
      include: {
        supply_entry: true,
        supply_output: true,
        user: true,
      },
    });
  }

  async update(id: string, profile: Profile): Promise<Profile> {
    return await this.service.profile.update({
      where: { id: id },
      data: profile,
    });
  }

  async delete(id: string): Promise<Profile> {
    return await this.service.profile.delete({ where: { id: id } });
  }

  async findAllByIdProfile(id: string): Promise<Profile> {
    return await this.service.profile.findFirst({
      where: { id: id },
      include: { supply_entry: true, _count: true },
    });
  }
}
