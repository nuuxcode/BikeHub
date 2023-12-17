import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from '@prisma/client';

import { UserService } from '../user/user.service';
import { PrismaService } from '../prisma/prisma.service';
import { AuthHelpers } from '../../shared/helpers/auth.helpers';
import { GLOBAL_CONFIG } from '../../configs/global.config';
import { ROLES_ENUM } from '../../shared/constants/global.constants';

import { AuthResponseDTO, LoginUserDTO, RegisterUserDTO, UserDetails } from './auth.dto';
import { EmailService } from '../email/email.service';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private prisma: PrismaService,
    private jwtService: JwtService,
    private emailService: EmailService,
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
      image: userData.image,
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
    const object = 'Welcome to BikeHub! - Enjoy your bike!';
    const content = `
    Hello ${user.name},

    Welcome to BikeHub!

    You can update your profile information from profile settings.

    Link: ${process.env.REDIRECT_URL}/setting-profile/

    Thank you,
    Enjoy your Bike :)
    `;
    const userData = await this.userService.findUser({
      email: user.email,
    });

    if (userData) {
      throw new UnauthorizedException("This email already exists");
    }
    const newUser = { ...user, role: ROLES_ENUM.USER }; // default role
    const Res = await this.userService.createUser(newUser);
    await this.emailService.sendEmail(user.email, object, content);
    delete Res.password;
    return Res;
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
    const object = 'Welcome to BikeHub! - Your Password!';
    const content = `
    Hello ${details.name},

    Welcome to BikeHub!

    Your password is: ${details.password}

    You can change your password from profile settings.

    Link: ${process.env.REDIRECT_URL}/setting-profile/updatePassword


    Enjoy your Bike :)
    `;

    const user = await this.prisma.user.findUnique({
      where: { email: details.email },
    });
    if (!user) {
      console.log("new user")
      console.log(details)
      newUser = await this.prisma.user.create({ data: details });
      await this.emailService.sendEmail(details.email, object, content);
      newUser.password = null;
    }
    data = newUser || user;
    if (data) {
      data.password = null;
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
