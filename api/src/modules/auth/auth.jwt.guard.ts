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
    console.log("--- canactivate")
    this.roles = this.reflector.get<string[]>('roles', context.getHandler());
    const request = context.switchToHttp().getRequest();
    if (request.headers['user-id'] && request.route.path === '/api/v1/rentals/rental/:id' && request.method === 'GET') {
      return this.validateRental(request);
    }
    return super.canActivate(context);
  }

  async validateRental(request): Promise<boolean> {
    console.log("--- validateRental")
    const { params } = request;
    const rental = await this.rentalService.findOne({ id: Number(params.id) });
    console.log("rental",rental)
    if (rental == null) {
      throw new ForbiddenException();
    }
    const user_id = request.headers['user-id'];
    console.log("request.headers['user-id']", user_id)
    console.log("rentalService.findOne user_id", rental?.user_id)
    const isSelfUser = (user_id == rental.user_id);
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

  handleRequest(
    err: Error,
    user: User,
    info: any,
    context: ExecutionContext,
  ): any {
    console.log("user",user)
    console.log("--- handleRequest")
    const request = context.switchToHttp().getRequest();
    console.log("xxxx")
    console.log("request.body",request.body)
    console.log("------")
    console.log("request.headers",request.headers)
    console.log("+++++")
    console.log("request.params",request.params)
    console.log("+++++")
    console.log("request.route.path",request.route.path, request.method)
    console.log("+++++")
    const { params } = request;
    if (err || !user) {
      throw err || new UnauthorizedException();
    }
    if (!this.roles) {
      return user;
    }
    console.log("pass")
    const hasRole = () => this.roles.includes(user.role);
    console.log("hasRole",hasRole())
    const isSelfUser = () => user.id === Number(params.id) || user.id === Number(request.body.user_id);

    const hasPermission = hasRole() || isSelfUser();

    if (!hasPermission) {
      console.log("no perm")
      throw new ForbiddenException();
    }

    return user;
  }
}
