import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AuthModule } from '../auth/auth.module';
import { UserModule } from '../user/user.module';
import { BikeModule } from '../bike/bike.module';
import { ParkModule } from '../park/park.module';
import { RentalModule } from '../rental/rental.module';
import { PrismaModule } from '../prisma/prisma.module';
import { PaypalModule } from '../payment/paypal.module';
import { GLOBAL_CONFIG } from '../../configs/global.config';

import { AppService } from './app.service';
import { AppController } from './app.controller';

@Module({
  imports: [
    PrismaModule,
    AuthModule,
    UserModule,
    ParkModule,
    BikeModule,
    RentalModule,
    ConfigModule.forRoot({ isGlobal: true, load: [() => GLOBAL_CONFIG] }),
    PaypalModule
  ],
  controllers: [AppController],
  providers: [AppService],
  exports: [],
})
export class AppModule {}
