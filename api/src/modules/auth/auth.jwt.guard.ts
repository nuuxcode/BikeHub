import {
  ExecutionContext,
  Injectable,
  UnauthorizedException,
  ForbiddenException,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
import { User } from '@prisma/client';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  roles: string[];

  constructor(private reflector?: Reflector) {
    super(reflector);
  }

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    this.roles = this.reflector.get<string[]>('roles', context.getHandler());
    return super.canActivate(context);
  }

  handleRequest(
    err: Error,
    user: User,
    info: any,
    context: ExecutionContext,
  ): any {
    const request = context.switchToHttp().getRequest();
    const { params } = request;
    if (err || !user) {
      throw err || new UnauthorizedException();
    }
    if (!this.roles) {
      return user;
    }
    const hasRole = () => this.roles.includes(user.role);
    const isSelfUser = () => user.id === Number(params.userId);

    const hasPermission = hasRole() || isSelfUser();

    if (!hasPermission) {
      throw new ForbiddenException();
    }

    return user;
  }
}
