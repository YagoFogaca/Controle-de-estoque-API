import { Injectable } from '@nestjs/common';
import { CanActivate, ExecutionContext } from '@nestjs/common/interfaces';
import { UnauthorizedException } from '@nestjs/common/exceptions';

@Injectable()
export class IsAdminAuthorization implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const httpRequet = context.switchToHttp().getRequest();

    const user = httpRequet.user;
    if (user?.role === 'admin') {
      return true;
    }

    throw new UnauthorizedException(
      'Você não tem permissão para acessar essa rota',
    );
  }
}
