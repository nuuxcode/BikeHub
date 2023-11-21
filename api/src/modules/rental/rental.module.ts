import { Module } from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service';

import { RentalService } from './rental.service';
import { RentalController } from './rental.controller';

@Module({
  imports: [],
  controllers: [RentalController],
  providers: [RentalService, PrismaService],
  exports: [RentalService],
})
export class RentalModule {}
