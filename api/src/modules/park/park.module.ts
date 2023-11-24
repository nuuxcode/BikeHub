import { Module } from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service';

import { ParkService } from './park.service';
import { ParkController } from './park.controller';

@Module({
  imports: [],
  controllers: [ParkController],
  providers: [ParkService, PrismaService],
  exports: [ParkService],
})
export class ParkModule {}
