import { Injectable } from '@nestjs/common';
import { ProfileRepository } from './profile.repository';
import { UserService } from 'src/user/service/user.service';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { Profile } from '../entities/profile.entity';
import { ProfileEntity } from '../entities/profileValidation.entity';

@Injectable()
export class ProfileService {
  constructor(
    private readonly profileRepository: ProfileRepository,
    private readonly userService: UserService,
  ) {}

  async create(profile: CreateProfileDto): Promise<string> {
    await this.userService.getById(profile.userId);

    const profileEntity = new ProfileEntity(profile);
    const profileCreated = await this.profileRepository.create(
      profileEntity.verifyProfile(),
    );
    if (!profileCreated) {
      throw new Error('Não foi possível criar o profile');
    }

    return 'Profile criado com sucesso';
  }

  async findAll(): Promise<Profile[] | string> {
    const profiles = await this.profileRepository.findAll();
    if (profiles.length <= 0) {
      return 'Não a nenhum profile registado na aplicação';
    }
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
      throw new Error('Erro ao atualizar o profile');
    }
    return 'O profile foi atualizado com sucesso';
  }

  async remove(id: string): Promise<string> {
    try {
      const profileDeleted = await this.profileRepository.delete(id);
      if (!profileDeleted) {
        throw new Error('Usuário não encontrado.');
      }

      return 'Profile deletado com sucesso';
    } catch (error) {
      console.log(error);
      throw new Error('O profile não encontrado.');
    }
  }
}
