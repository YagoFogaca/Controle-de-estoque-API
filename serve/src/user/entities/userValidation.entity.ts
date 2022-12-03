import { IdGenerator } from '../../utils/id-generator/id-generator';
import * as emailValidator from 'email-validator';
import * as bcrypt from 'bcrypt';
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

  private verifyCpf() {
    if (this.cpf.length < 11) {
      throw new Error('CPF invalido');
    }
  }

  private verifyEmail() {
    if (!emailValidator.validate(this.email)) {
      throw new Error('Email invalido');
    }
  }

  private verifyPassword() {
    if (this.password.length < 6) {
      throw new Error('Senha invalida');
    }

    this.password = bcrypt.hashSync(this.password, 10);
  }

  private verifyRole() {
    if (this.role !== 'admin' && this.role !== 'profile') {
      throw new Error('Tipo de usuário inválido');
    }
  }

  verifyUser() {
    this.verifyCpf();
    this.verifyEmail();
    this.verifyPassword();
    this.verifyRole();
    return {
      id: IdGenerator.idGenerator(),
      cpf: this.cpf,
      email: this.email,
      name: this.name,
      password: this.password,
      role: this.role,
    };
  }
}
