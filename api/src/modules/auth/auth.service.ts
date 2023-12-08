import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from '@prisma/client';

import { UserService } from '../user/user.service';
import { PrismaService } from '../prisma/prisma.service';
import { AuthHelpers } from '../../shared/helpers/auth.helpers';
import { GLOBAL_CONFIG } from '../../configs/global.config';
import { ROLES_ENUM } from '../../shared/constants/global.constants';

import { AuthResponseDTO, LoginUserDTO, RegisterUserDTO, UserDetails } from './auth.dto';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) { }

  public async login(loginUserDTO: LoginUserDTO): Promise<AuthResponseDTO> {
    const userData = await this.userService.findUser({
      email: loginUserDTO.email,
    });

    if (!userData) {
      throw new UnauthorizedException("This email doesn't exist");
    }

    const isMatch = await AuthHelpers.verify(
      loginUserDTO.password,
      userData.password,
    );

    if (!isMatch) {
      throw new UnauthorizedException("Password doesn't match");
    }

    const payload = {
      id: userData.id,
      name: userData.name,
      email: userData.email,
      password: null,
      role: userData.role,
      created_at: new Date(),
      updated_at: new Date(),
      birthdate: userData.birthdate,
      phone: userData.phone,
    };

    const accessToken = this.jwtService.sign(payload, {
      expiresIn: GLOBAL_CONFIG.security.expiresIn,
    });

    return {
      user: payload,
      accessToken: accessToken,
    };
  }

  public async register(user: RegisterUserDTO): Promise<User> {
    const userData = await this.userService.findUser({
      email: user.email,
    });

    if (userData) {
      throw new UnauthorizedException("This email already exists");
    }
    const newUser = { ...user, role: ROLES_ENUM.USER }; // default role
    return this.userService.createUser(newUser);
  }

  public validateToken(token: string): any {
    try {
      return this.jwtService.verify(token);
    } catch (error) {
      return null;
    }
  }

  public async validateUser(details: UserDetails): Promise<AuthResponseDTO> {
    let data = null;
    let newUser = null;

    const user = await this.prisma.user.findUnique({
      where: { email: details.email },
    });
    if (!user) {
      newUser = await this.prisma.user.create({ data: details });
      newUser.password = null;
    }
    data = newUser || user;
    if (data) {
      data.password = null;;
      const accessToken = this.jwtService.sign(data, {
        expiresIn: GLOBAL_CONFIG.security.expiresIn,
      });
      return {
        user: data,
        accessToken: accessToken,
      };
    } else {
      throw new UnauthorizedException();
    }
  }

}
