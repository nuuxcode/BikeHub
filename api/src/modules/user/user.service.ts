import { Prisma, User } from '@prisma/client';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthHelpers } from '../../shared/helpers/auth.helpers';
import { PrismaService } from '../prisma/prisma.service';
import { UpdateUser } from './../auth/auth.dto';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) { }

  async findUser(
    userWhereUniqueInput: Prisma.UserWhereUniqueInput,
  ): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: userWhereUniqueInput,
    });
  }

  async users(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.UserWhereUniqueInput;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput;
  }): Promise<User[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.user.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async createUser(data: Prisma.UserCreateInput): Promise<User> {
    return this.prisma.user.create({
      data,
    });
  }

  async updateUser(params: {
    where: Prisma.UserWhereUniqueInput;
    data: UpdateUser;
  }): Promise<User> {
    let { where, data } = params;
    console.log("data recieved:", data)
    const user = await this.prisma.user.findUnique({
      where: where,
    });
    console.log("user found:", user)
    //if request has newPassword, mean we gonna update password
    if (data.hasOwnProperty('newPassword')) {
      const isMatch = await AuthHelpers.verify(
        data.oldPassword,
        user.password,
      );
      if (!isMatch) {
        console.log("old password doesn't match")
        throw new UnauthorizedException("Old password doesn't match");
      }
      data.password = data.newPassword;
      delete data.oldPassword;
      delete data.newPassword;
    } else {
      data.password = user.password;
    }
    console.log("data updated:", data)
    const updatedUser = await this.prisma.user.update({
      data,
      where,
    });
    console.log("user updated:", updatedUser)
    delete updatedUser.password;
    return updatedUser;
  }

  async deleteUser(where: Prisma.UserWhereUniqueInput): Promise<User> {
    return this.prisma.user.delete({
      where,
    });
  }
}
