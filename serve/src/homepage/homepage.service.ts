import { Injectable } from '@nestjs/common';
import { ProfileService } from 'src/profile/service/profile.service';
import { UserService } from 'src/user/service/user.service';

@Injectable()
export class HomepageService {
  constructor(
    private readonly userService: UserService,
    private readonly profileService: ProfileService,
  ) {}

  async findAllByIdUser(id: string) {
    return await this.userService.findAllByIdUser(id);
  }

  async findAllByIdProfile(id: string) {
    return await this.profileService.findAllByIdProfile(id);
  }
}
