import { IsString, IsNotEmpty } from 'class-validator';

export class CreateParkDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  location: string;
}

export class UpdateParkDto {
  @IsString()
  @IsNotEmpty()
  name?: string;

  @IsString()
  @IsNotEmpty()
  location?: string;
}
