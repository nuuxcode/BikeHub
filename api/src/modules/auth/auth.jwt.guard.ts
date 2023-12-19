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
import { RentalService } from '../rental/rental.service';
@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  roles: string[];

  constructor(private reflector?: Reflector, private rentalService?: RentalService) {
    super(reflector);
  }

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    this.roles = this.reflector.get<string[]>('roles', context.getHandler());
    const request = context.switchToHttp().getRequest();
    if (request.route.path === '/api/v1/rentals/rental/:id' && request.method === 'GET') {
      return this.validateRental(request);
    }
    return super.canActivate(context);
  }
  async validateRental(request): Promise<boolean> {
    const { params } = request;
    const rental = await this.rentalService.findOne({ id: Number(params.id) });
    const user_id = request.headers['user-id'];
    console.log("request.headers['user-id']", user_id)
    console.log("rentalService.findOne user_id", rental?.user_id)
    const isSelfUser = (rental != null && user_id == rental.user_id);
    if (!isSelfUser) {
      if (!rental) {
        console.log("rental not exist")
      } else {
        console.log("rental not valid")
      }
      throw new ForbiddenException();
    }
    console.log("rental valid")
    return true;
  }

  ashandleRequest(
    err: Error,
    user: User,
    info: any,
    context: ExecutionContext,
  ): any {
    const request = context.switchToHttp().getRequest();
    console.log("xxxx")
    console.log(request.body)
    console.log("------")
    console.log(request.headers)
    console.log("+++++")
    console.log(request.params)
    console.log("+++++")
    console.log(request.route.path, request.method)
    const { params } = request;
    if (err || !user) {
      throw err || new UnauthorizedException();
    }
    if (!this.roles) {
      return user;
    }
    const hasRole = () => this.roles.includes(user.role);
    let isSelfUser = () => user.id === Number(params.id) || user.id === Number(request.body.user_id);


    const hasPermission = hasRole() || isSelfUser();

    if (!hasPermission) {
      throw new ForbiddenException();
    }

    return user;
  }
}
