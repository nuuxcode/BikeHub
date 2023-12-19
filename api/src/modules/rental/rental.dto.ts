import { IsNumber, IsNotEmpty, IsDate, IsString } from 'class-validator';

export class CreateRentalDto {
  @IsNumber()
  @IsNotEmpty()
  user_id: number;

  @IsNumber()
  @IsNotEmpty()
  bike_id: number;

  //@IsDate()
  @IsNotEmpty()
  start_time: Date;

   //@IsDate()
  @IsNotEmpty()
  end_time: Date;

  @IsString()
  @IsNotEmpty()
  status: string;

  @IsNumber()
  @IsNotEmpty()
  price: number;

  @IsString()
  qrcode?: string;

  @IsString()
  payment_id?: string;

  @IsString()
  order_id?: string;
}

export class UpdateRentalDto {
  @IsNumber()
  @IsNotEmpty()
  user_id?: number;

  @IsNumber()
  @IsNotEmpty()
  bike_id?: number;

   //@IsDate()
  @IsNotEmpty()
  start_time?: Date;

   //@IsDate()
  @IsNotEmpty()
  end_time?: Date;

  @IsString()
  @IsNotEmpty()
  status?: string;

  @IsNumber()
  @IsNotEmpty()
  price?: number;

  @IsString()
  qrcode?: string;

  @IsString()
  payment_id?: string;

  @IsString()
  order_id?: string;
}
