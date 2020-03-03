import { Injectable, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Observable } from 'rxjs';
import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class PermissionGuard extends AuthGuard('jwt') {

  constructor(private readonly reflector: Reflector, private readonly jwtService: JwtService) {
    super('jwt')
  }

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {

    const permissions = this.reflector.get<string[]>('permissions', context.getHandler());
    const request = context.switchToHttp().getRequest();

    if (!request.headers.authorization) {
      return false;
    }

    try {
      const jwt = request.headers.authorization.replace("Bearer ", "");
      const user = this.jwtService.verify(jwt);
      return user.permissions.some(r => permissions.indexOf(r) >= 0);
    } catch {
      return false;
    }

  }

}