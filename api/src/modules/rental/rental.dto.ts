import { IsNumber, IsNotEmpty, IsDate, IsString } from 'class-validator';

export class CreateRentalDto {
  @IsNumber()
  @IsNotEmpty()
  user_id: number;

  @IsNumber()
  @IsNotEmpty()
  bike_id: number;

  @IsDate()
  @IsNotEmpty()
  start_time: Date;

  @IsDate()
  @IsNotEmpty()
  end_time: Date;

  @IsString()
  @IsNotEmpty()
  status: string;

  @IsNumber()
  @IsNotEmpty()
  price: number;
}

export class UpdateRentalDto {
  @IsNumber()
  @IsNotEmpty()
  user_id?: number;

  @IsNumber()
  @IsNotEmpty()
  bike_id?: number;

  @IsDate()
  @IsNotEmpty()
  start_time?: Date;

  @IsDate()
  @IsNotEmpty()
  end_time?: Date;

  @IsString()
  @IsNotEmpty()
  status?: string;

  @IsNumber()
  @IsNotEmpty()
  price?: number;
}
