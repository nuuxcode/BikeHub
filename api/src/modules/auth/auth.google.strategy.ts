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
    const data = { name: profile.displayName, email: profile.emails[0].value, password: "123456789" } //password here is for testing purposes only
    const user = await this.authService.validateUser(data);
    return user || null;
  }
}
