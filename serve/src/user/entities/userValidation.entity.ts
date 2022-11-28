import { randomUUID } from 'crypto';
import * as emailValidator from 'email-validator';
import { PartialUserDto } from '../service/dto/partialUser.dto';

export class UserEntity {
  private cpf: string;
  private email: string;
  private name: string;
  private password: string;
  private role: string;

  constructor({ cpf, email, name, password, role }: PartialUserDto) {
    this.cpf = cpf;
    this.email = email;
    this.name = name;
    this.password = password;
    this.role = role;
  }

  verifyCpf() {
    if (this.cpf.length < 11) {
      throw new Error('CPF invalido');
    }
  }

  verifyEmail() {
    if (!emailValidator.validate(this.email)) {
      throw new Error('Email invalido');
    }
  }

  verifyPassword() {
    if (this.password.length < 6) {
      throw new Error('Senha invalida');
    }
  }

  verifyRole() {
    if (this.role !== 'admin' && this.role !== 'profile') {
      throw new Error('Tipo de usuário inválido');
    }
  }

  returnUser() {
    return {
      id: randomUUID(),
      cpf: this.cpf,
      email: this.email,
      name: this.name,
      password: this.password,
      role: this.role,
    };
  }
}
