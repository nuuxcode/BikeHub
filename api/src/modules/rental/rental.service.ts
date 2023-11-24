import { Injectable } from '@nestjs/common';
import { Rental, Prisma } from '@prisma/client';

import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class RentalService {
  constructor(private prisma: PrismaService) {}

  async findOne(
    rentalWhereUniqueInput: Prisma.RentalWhereUniqueInput,
  ): Promise<Rental | null> {
    return this.prisma.rental.findUnique({
      where: rentalWhereUniqueInput,
    });
  }

  async findAll(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.RentalWhereUniqueInput;
    where?: Prisma.RentalWhereInput;
    orderBy?: Prisma.RentalOrderByWithRelationInput;
  }): Promise<Rental[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.rental.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
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
