import { Injectable } from '@nestjs/common';
import { Bike, Park, Rental, Prisma } from '@prisma/client';

import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class RentalService {
  constructor(private prisma: PrismaService) { }

  async findOne(
    rentalWhereUniqueInput: Prisma.RentalWhereUniqueInput,
  ): Promise<Rental | null> {
    const data = await this.prisma.rental.findUnique({
      where: rentalWhereUniqueInput,
      include: {
        User: true,
        Bike: {
          include: {
            Park: true,
          },
        },
      },
    });
    console.log("data", data)
    if (data) {
      delete data.User.password;
    }
    return data;
  }

  async findFirst(): Promise<Rental> {
    return this.prisma.rental.findFirst();
  }

  async findAll(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.RentalWhereUniqueInput;
    where?: Prisma.RentalWhereInput;
    orderBy?: Prisma.RentalOrderByWithRelationInput;
  }): Promise<Rental[]> {
    const { skip, take, cursor, where, orderBy } = params;
    let data = await this.prisma.rental.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
      include: {
        User: true,
        Bike: {
          include: {
            Park: true,
          },
        },
      },
    });
    // go through array and delete password from each user
    data.forEach((rental) => {
      delete rental.User.password;
    });
    return data;
  }

  async create(data: Prisma.RentalCreateInput): Promise<Rental> {
    return this.prisma.rental.create({
      data,
    });
  }

  async update(params: {
    where: Prisma.RentalWhereUniqueInput;
    data: Prisma.RentalUpdateInput;
  }): Promise<Rental> {
    const { data, where } = params;
    return this.prisma.rental.update({
      data,
      where,
    });
  }

  async delete(where: Prisma.RentalWhereUniqueInput): Promise<Rental> {
    return this.prisma.rental.delete({
      where,
    });
  }
}
