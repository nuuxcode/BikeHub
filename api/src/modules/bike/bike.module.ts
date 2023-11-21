import { Module } from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service';

import { BikeService } from './bike.service';
import { BikeController } from './bike.controller';

@Module({
  imports: [],
  controllers: [BikeController],
  providers: [BikeService, PrismaService],
  exports: [BikeService],
})
export class BikeModule {}
