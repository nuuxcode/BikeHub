import {
  Body,
  Controller,
  UseGuards,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Bike as BikeModel } from '@prisma/client';
import { ApiTags } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';

import { JwtAuthGuard } from '../auth/auth.jwt.guard';
import { Roles } from '../auth/auth.roles.decorator';
import { ROLES_ENUM } from '../../shared/constants/global.constants';

import { BikeService } from './bike.service';

@ApiTags('bikes')
@Controller('/bikes')
export class BikeController {
  constructor(private bikeService: BikeService) {}

  @Get('/')
  async getAllBikes(): Promise<BikeModel[]> {
    return this.bikeService.findAll({});
  }

  @Get('bike/:id')
  async getBikeById(@Param('id') id: string): Promise<BikeModel> {
    return this.bikeService.findOne({ id: Number(id) });
  }

  @Post('bike')
  @Roles(ROLES_ENUM.ADMIN)
  @UseGuards(JwtAuthGuard)
  async createBike(
    @Body()
    bikeData: {
      model: string;
      status?: string;
      lock: boolean;
      location: string;
      price_tier: string;
      park_id: number;
    },
  ): Promise<BikeModel> {
    const { model, status, lock, location, price_tier, park_id } = bikeData;
    return this.bikeService.create({
      model,
      status,
      lock,
      location,
      price_tier,
      Park: {
        connect: { id: park_id },
      },
    });
  }

  @Put('bike/:id')
  @Roles(ROLES_ENUM.ADMIN)
  @UseGuards(JwtAuthGuard)
  async updateBike(
    @Param('id') id: string,
    @Body() bikeData: Prisma.BikeUpdateInput,
  ): Promise<BikeModel> {
    return this.bikeService.update({
      where: { id: Number(id) },
      data: bikeData,
    });
  }

  @Delete('bike/:id')
  @Roles(ROLES_ENUM.ADMIN)
  @UseGuards(JwtAuthGuard)
  async deleteBike(@Param('id') id: string): Promise<BikeModel> {
    return this.bikeService.delete({ id: Number(id) });
  }
}
