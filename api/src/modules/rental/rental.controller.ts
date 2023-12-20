import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { Rental as RentalModel } from '@prisma/client';
import { ApiTags } from '@nestjs/swagger';

import { JwtAuthGuard } from '../auth/auth.jwt.guard';
import { Roles } from '../auth/auth.roles.decorator';
import { ROLES_ENUM } from '../../shared/constants/global.constants';

import { RentalService } from './rental.service';
import { CreateRentalDto, UpdateRentalDto } from './rental.dto';

@ApiTags('rentals')
@Controller('/rentals')
export class RentalController {
  constructor(private rentalService: RentalService) {}

  @Get('/')
  @Roles(ROLES_ENUM.ADMIN)
  @UseGuards(JwtAuthGuard)
  async getAllRentals(): Promise<RentalModel[]> {
    return this.rentalService.findAll({});
  }

  @Get('rental/check')
  @Roles(ROLES_ENUM.ADMIN)
  @UseGuards(JwtAuthGuard)
  async getFirstUser(): Promise<RentalModel> {
    console.log("----- check")
    return this.rentalService.findFirst();
  }

  @Get('rental/:id')
  @Roles(ROLES_ENUM.ADMIN)
  @UseGuards(JwtAuthGuard)
  async getRentalById(@Param('id') id: string): Promise<RentalModel> {
    console.log("----- check12")
    return this.rentalService.findOne({ id: Number(id) });
  }

  @Get('user/:id')
  @Roles(ROLES_ENUM.ADMIN)
  @UseGuards(JwtAuthGuard)
  async getRentalsByUser(
    @Param('id') id: string,
  ): Promise<RentalModel[]> {
    return this.rentalService.findAll({ where: { user_id: Number(id) } });
  }



  @Post('rental')
  @Roles(ROLES_ENUM.ADMIN)
  @UseGuards(JwtAuthGuard)
  async createRental(
    @Body() createRentalDto: CreateRentalDto,
  ): Promise<RentalModel> {
    const { user_id, bike_id, ...rest } = createRentalDto;
    return this.rentalService.create({
      ...rest,
      User: {
        connect: { id: user_id },
      },
      Bike: {
        connect: { id: bike_id },
      },
    });
  }

  @Put('rental/:id')
  @Roles(ROLES_ENUM.ADMIN)
  @UseGuards(JwtAuthGuard)
  async updateRental(
    @Param('id') id: string,
    @Body() updateRentalDto: UpdateRentalDto,
  ): Promise<RentalModel> {
    const { user_id, bike_id, ...rest } = updateRentalDto;
    return this.rentalService.update({
      where: { id: Number(id) },
      data: {
        ...rest,
        ...(user_id ? { User: { connect: { id: user_id } } } : {}),
        ...(bike_id ? { Bike: { connect: { id: bike_id } } } : {}),
      },
    });
  }

  @Delete('rental/:id')
  @Roles(ROLES_ENUM.ADMIN)
  @UseGuards(JwtAuthGuard)
  async deleteRental(@Param('id') id: string): Promise<RentalModel> {
    return this.rentalService.delete({ id: Number(id) });
  }
}
