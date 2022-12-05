import { IdGenerator } from 'src/utils/id-generator/id-generator';
import { CreateProfileDto } from '../service/dto/create-profile.dto';
import { Profile } from './profile.entity';

export class ProfileEntity extends Profile {
  constructor({ userId, title, imageURL }: CreateProfileDto) {
    super();
    this.userId = userId;
    this.title = title;
    this.imageURL = imageURL;
  }

  validationTitle(): void {
    if (this.title.length <= 3) {
      throw new Error('O nome do perfil deve ser maior que 3 caracters');
    }
  }

  verifyProfile() {
    this.validationTitle();

    return {
      id: IdGenerator.idGenerator(),
      userId: this.userId,
      title: this.title,
      imageURL: this.imageURL,
    };
  }
}
