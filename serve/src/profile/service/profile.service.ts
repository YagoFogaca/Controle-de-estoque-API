import { Injectable } from '@nestjs/common';
import { IdGenerator } from 'src/utils/id-generator/id-generator';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { Profile } from '../entities/profile.entity';
import { ProfileRepository } from './profile.repository';

@Injectable()
export class ProfileService {
  constructor(private readonly profileRepository: ProfileRepository) {}

  async create(profile: CreateProfileDto): Promise<string> {
    // Colocar validação com a entidade de validação

    const createProfile = {
      ...profile,
      id: IdGenerator.idGenerator(),
    };

    const profileCreated = await this.profileRepository.create(createProfile);
    if (!profileCreated) {
      throw new Error('Não foi possível criar o profile');
    }

    return 'Profile criado com sucesso';
  }

  async findAll(): Promise<Profile[]> {
    return await this.profileRepository.findAll();
  }

  async findOne(id: string): Promise<Profile> {
    const profile = await this.profileRepository.findOne(id);
    if (!profile) {
      throw new Error('O profile não foi encontado com esse id');
    }
    return profile;
  }

  async update(id: string, profile: UpdateProfileDto): Promise<string> {
    const findOneProfile = await this.findOne(id);

    const updateProfile = Object.assign(findOneProfile, profile);

    const profileUpdated = await this.profileRepository.update(
      id,
      updateProfile,
    );
    if (!profileUpdated) {
      throw new Error('O profile não foi atualizado por algum motivo');
    }
    return 'O profile foi atualizado com sucesso';
  }

  async remove(id: string): Promise<string> {
    const profileDeleted = await this.profileRepository.delete(id);
    if (!profileDeleted) {
      throw new Error('O profile não foi excluído');
    }
    return 'Profile deletado com sucesso';
  }
}
