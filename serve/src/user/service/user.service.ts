import { Injectable } from '@nestjs/common';
import { IUserEntity } from '../entities/user.entity';
import { UserRepository } from '../user.repository';
import { PartialUserDto } from './dto/partialUser.dto';
import { UserDto } from './dto/user.dto';
import { UserEntity } from '../entities/userValidation.entity';

@Injectable()
export class UserService {
  constructor(private readonly repository: UserRepository) {}

  async getAll(): Promise<IUserEntity[]> {
    const user = await this.repository.getAll();
    if (!user) {
      throw new Error('Usuário não encontrado.');
    }

    return user;
  }

  async getById(id: string): Promise<IUserEntity> {
    const user = await this.repository.getById(id);
    if (!user) {
      throw new Error('Usuário não encontrado.');
    }

    return user;
  }

  async create(user: UserDto): Promise<IUserEntity> {
    const verifyEmail = await this.repository.getByEmail(user.email);
    if (!verifyEmail) {
      throw new Error('Email já registrado');
    }

    const verifyCpf = await this.repository.getByCpf(user.cpf);
    if (!verifyCpf) {
      throw new Error('CPF ja registrado');
    }

    const userEntity = new UserEntity(user);
    const userCreated = await this.repository.create(userEntity.verifyUser());
    return userCreated;
  }

  async update(user: PartialUserDto, id: string): Promise<IUserEntity> {
    const userData = await this.getById(id);

    const userUpdate = Object.assign(userData, user);
    const userUpdated = await this.repository.update(userUpdate, id);
    if (!userUpdated) {
      throw new Error('Erro ao atualizar o usuário.');
    }

    return userUpdated;
  }

  async delete(id: string): Promise<string> {
    try {
      const user = await this.repository.delete(id);
      if (!user) {
        throw new Error('Usuário não encontrado.');
      }

      return 'Usuário deletado com sucesso';
    } catch (error) {
      console.log(error);
      return 'Usuário não encontrado';
    }
  }
}
