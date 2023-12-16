import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-google-oauth20';
import { VerifiedCallback, VerifyCallback } from 'passport-jwt';
import { AuthService } from './auth.service';



@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
  constructor(private authService: AuthService) {
    super({
      clientID: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      callbackURL: `${process.env.CALLBACK}/api/v1/auth/google/callback`,
      scope: ['email', 'profile'],
    });
  }

  async validate(accessToken: string, refreshToken: string, profile: any): Promise<any> {
    console.log(profile)
    const generateRandomString = (length) => {
      const characters = '#@ABCDEFGHIJKLMNOPQRSTUVWXYZ#@abcdefghijklmnopqrstuvwxyz#@0123456789#@';
      return Array.from({ length }, () => characters.charAt(Math.floor(Math.random() * characters.length))).join('');
    };
    const data = { name: profile.displayName, email: profile.emails[0].value, password: generateRandomString(10), birthdate: new Date("1111-11-11"), phone: "", image: profile.photos[0].value }
    console.log(data)
    const user = await this.authService.validateUser(data);
    return user || null;
  }
}
