import {
  Body,
  Controller,
  Get,
  Post,
  Delete,
  Put,
  UseGuards,
  Param
} from '@nestjs/common';
import { User } from '@prisma/client';
import { ApiTags } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';
import { ROLES_ENUM } from 'src/shared/constants/global.constants';
import { JwtAuthGuard } from '../auth/auth.jwt.guard';
import { Roles } from '../auth/auth.roles.decorator';
import { UpdateUser } from './../auth/auth.dto';
import { UserService } from './user.service';

@ApiTags('users')
@Controller('/users')
export class UserController {
  constructor(private userService: UserService) { }

  @Get()
  @Roles(ROLES_ENUM.ADMIN)
  @UseGuards(JwtAuthGuard)
  async getAll(): Promise<User[]> {
    return this.userService.users({});
  }

  @Get('check')
  @Roles(ROLES_ENUM.ADMIN)
  @UseGuards(JwtAuthGuard)
  async getFirstUser(): Promise<User> {
    return this.userService.findFirst();
  }

  @Get(':id')
  @Roles(ROLES_ENUM.ADMIN)
  @UseGuards(JwtAuthGuard)
  async getUserById(@Param('id') id: string): Promise<User> {
    return this.userService.findUser({ id: Number(id) });
  }

  @Put('user/:id')
  @Roles(ROLES_ENUM.ADMIN)
  @UseGuards(JwtAuthGuard)
  async updateUser(
    @Param('id') id: string,
    @Body() userData: UpdateUser,
  ): Promise<User> {
    return this.userService.updateUser({
      where: { id: Number(id) },
      data: userData,
    });
  }

  @Delete('delete/:id')
  @Roles(ROLES_ENUM.ADMIN)
  @UseGuards(JwtAuthGuard)
  async deleteUser(
    @Param('id') id: string,
    @Body('password') password: string,
  ): Promise<{ message: string }> {
    const deletedUser = await this.userService.deleteUser(
      { id: Number(id) },
      password,
    );

    return { message: 'User deleted' };
  }
}
