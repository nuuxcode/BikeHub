import { Module, Global } from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service';

import { RentalService } from './rental.service';
import { RentalController } from './rental.controller';

@Global()
@Module({
  imports: [],
  controllers: [RentalController],
  providers: [RentalService, PrismaService],
  exports: [RentalService],
})
export class RentalModule {}
