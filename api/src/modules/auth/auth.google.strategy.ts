import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-google-oauth20';
import { VerifiedCallback, VerifyCallback } from 'passport-jwt';
import { AuthService } from './auth.service';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
  constructor(private authService: AuthService) {
    super({
      clientID: '1056307988139-cdpr08sgvae8m8r6ns8oh5cdd7akuo79.apps.googleusercontent.com',
      clientSecret: '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',
      callbackURL: 'http://localhost:3300/api/v1/auth/google/callback',
      scope: ['email', 'profile'],
    });
  }

  async validate(accessToken: string, refreshToken: string, profile: any): Promise<any> {
    console.log("------- start validate")
    const data = { name : profile.displayName, email: profile.emails[0].value, password: profile.id }
    const user = await this.authService.validateUser(data);
    console.log("------- user from validate")
    console.log(user)
    return user || null;
  }
}
