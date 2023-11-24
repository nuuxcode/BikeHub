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
import { Park as ParkModel } from '@prisma/client';
import { ApiTags } from '@nestjs/swagger';

import { JwtAuthGuard } from '../auth/auth.jwt.guard';
import { Roles } from '../auth/auth.roles.decorator';
import { ROLES_ENUM } from '../../shared/constants/global.constants';

import { ParkService } from './park.service';
import { CreateParkDto, UpdateParkDto } from './park.dto';

@ApiTags('parks')
@Controller('/parks')
export class ParkController {
  constructor(private parkService: ParkService) {}

  @Get('/')
  async getAllParks(): Promise<ParkModel[]> {
    return this.parkService.findAll({});
  }

  @Get('park/:id')
  async getParkById(@Param('id') id: string): Promise<ParkModel> {
    return this.parkService.findOne({ id: Number(id) });
  }

  @Post('park')
  @Roles(ROLES_ENUM.ADMIN)
  @UseGuards(JwtAuthGuard)
  async createPark(@Body() createParkDto: CreateParkDto): Promise<ParkModel> {
    return this.parkService.create(createParkDto);
  }

  @Put('park/:id')
  @Roles(ROLES_ENUM.ADMIN)
  @UseGuards(JwtAuthGuard)
  async updatePark(
    @Param('id') id: string,
    @Body() updateParkDto: UpdateParkDto,
  ): Promise<ParkModel> {
    return this.parkService.update({
      where: { id: Number(id) },
      data: updateParkDto,
    });
  }

  @Delete('park/:id')
  @Roles(ROLES_ENUM.ADMIN)
  @UseGuards(JwtAuthGuard)
  async deletePark(@Param('id') id: string): Promise<ParkModel> {
    return this.parkService.delete({ id: Number(id) });
  }
}
