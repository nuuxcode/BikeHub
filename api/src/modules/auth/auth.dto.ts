import { User } from '@prisma/client';

import {
  IsDate,
  IsEmail,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

import { INVALID_EMAIL } from '../../shared/constants/strings';

export class AuthResponseDTO {
  user: User;
  accessToken: string;
}

export type UserDetails = {
  email: string;
  name: string;
  password: string;
  phone: string;
  birthdate: Date | string;
  image?: string;
  role?: string;
}

export type UpdateUser = {
  oldPassword?: string;
  newPassword?: string;
  email?: string;
  name?: string;
  password?: string;
  phone?: string;
  birthdate?: Date | string;
  image?: string;
  role?: string;
}

export class RegisterUserDTO {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  @IsEmail({}, { message: INVALID_EMAIL })
  email: string;

  @IsString()
  @MaxLength(30)
  @ApiProperty()
  name: string;

  @IsString()
  @MinLength(8)
  @ApiProperty()
  password: string;

  //@IsDate() temporarly disabling this validation
  @ApiProperty()
  birthdate: Date;

  @IsString()
  @MinLength(9)
  @ApiProperty()
  phone: string | null;
}

export class LoginUserDTO {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  @IsEmail({}, { message: INVALID_EMAIL })
  email: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  password: string;
}

