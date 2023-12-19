import { Controller, Get, Post, Body, Param, HttpException, HttpStatus } from '@nestjs/common';
import { PaypalService } from './paypal.service';

@Controller('/orders')
export class PaypalController {
  constructor(private readonly paypalService: PaypalService) {}

  @Get('/test')
  getTest(): string {
    return 'Order Path working!';
  }


  @Post('/create_order')
  async createOrder(@Body('cart') cart) {
    console.log("----------------");
    console.log("--------CREATE ORDER CONTROLER--------");
    console.log("----------------");
    console.log('create_order cart', cart)
    console.log('create_order value', cart.purchase_units[0].amount)
    if (!cart.purchase_units[0].amount.value) {
      console.log('Missing amount value.');
      throw new HttpException('Missing amount value.', HttpStatus.BAD_REQUEST);
    }
    try {
      const result = await this.paypalService.createOrder(cart);
      console.log('result create_order', result);
      return result;
    } catch (error) {
      throw new HttpException('Failed to create order.', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }


  @Post('/complete_order')
  async complete_order(@Body('order_id') cart) {
    console.log("----------------");
    console.log("--------COMPLETE ORDER CONTROLER--------");
    console.log("----------------");
    try {
      console.log('complete_order cart', cart)
      const result = await this.paypalService.completeOrder(cart);
      console.log('result complete_order', result);
      return result;
    } catch (error) {
      throw new HttpException('Failed to create order.', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Post(':orderID/capture')
  async captureOrder(@Param('orderID') orderID) {
    try {
      const result = await this.paypalService.completeOrder(orderID);
      return result;
    } catch (error) {
      throw new HttpException('Failed to capture order.', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
