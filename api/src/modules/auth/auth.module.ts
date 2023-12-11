import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';

import { UserService } from '../user/user.service';
import { JWT_SECRET } from '../../shared/constants/global.constants';
import { PrismaModule } from '../prisma/prisma.module';
import { PrismaService } from '../prisma/prisma.service';

import { JwtStrategy } from './auth.jwt.strategy';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { GoogleStrategy } from './auth.google.strategy';
import { EmailService } from '../email/email.service';

@Module({
  imports: [
    JwtModule.register({
      secret: JWT_SECRET,
    }),
    PrismaModule,
  ],
  providers: [UserService, AuthService, JwtStrategy, PrismaService, GoogleStrategy, EmailService],
  controllers: [AuthController],
})
export class AuthModule {}
