import { Module } from '@nestjs/common';
import { PaypalService } from './paypal.service';
import { PaypalController } from './paypal.controller';

@Module({
  providers: [PaypalService],
  controllers: [PaypalController],
})
export class PaypalModule {}
