import { Body, Controller, Post, Response, UseGuards, Get, Req, Res } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { User } from '@prisma/client';

import { JWT_EXPIRY_SECONDS } from '../../shared/constants/global.constants';

import { AuthService } from './auth.service';
import { AuthResponseDTO, LoginUserDTO, RegisterUserDTO } from './auth.dto';
import { AuthGuard } from '@nestjs/passport';
import { JwtAuthGuard } from '../auth/auth.jwt.guard';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Get('check')
  @UseGuards(JwtAuthGuard)
  async checkUser(@Req() req) {
    const token = req.cookies.accessToken;
    const user = this.authService.validateToken(token);
    return {
      user: user,
      accessToken: token,
    };
  }

  @Post('login')
  @ApiOperation({ description: 'Login user' })
  @ApiBody({ type: LoginUserDTO })
  @ApiResponse({ type: AuthResponseDTO })
  async login(
    @Body() user: LoginUserDTO,
    @Response() res,
  ): Promise<AuthResponseDTO> {
    const loginData = await this.authService.login(user);

    res.cookie('accessToken', loginData.accessToken, {
      expires: new Date(new Date().getTime() + JWT_EXPIRY_SECONDS),
      sameSite: 'strict',
      secure: false,
      httpOnly: true,
    });

    return res.status(200).send(loginData);
  }

  @Post('register')
  async register(@Body() user: RegisterUserDTO): Promise<User> {
    return this.authService.register(user);
  }

  @Post('logout')
  logout(@Response() res): void {
    res.clearCookie('accessToken');
    res.status(200).send({ success: true });
  }

  @Get('google')
  @UseGuards(AuthGuard('google'))
  async googleAuth() {

  }

  @Get('google/callback')
  @UseGuards(AuthGuard('google'))
  async googleAuthCallback(@Req() req, @Res() res) {
    res.cookie('accessToken', req.user.accessToken, {
      expires: new Date(new Date().getTime() + JWT_EXPIRY_SECONDS),
      sameSite: 'strict',
      secure: false,
      httpOnly: true,
    });
    console.log("redirecting to: ", process.env.REDIRECT_URL)
    return res.redirect(process.env.REDIRECT_URL);
  }
}
