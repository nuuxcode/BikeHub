import { Injectable } from '@nestjs/common';
import { Bike, Park, Prisma } from '@prisma/client';

import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ParkService {
  constructor(private prisma: PrismaService) {}

  async findOne(
    parkWhereUniqueInput: Prisma.ParkWhereUniqueInput,
  ): Promise<Park | null> {
    return this.prisma.park.findUnique({
      where: parkWhereUniqueInput,
      include: {
        Bike: true, // Include related park data
      },
    });
  }

  async findAll(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.ParkWhereUniqueInput;
    where?: Prisma.ParkWhereInput;
    orderBy?: Prisma.ParkOrderByWithRelationInput;
  }): Promise<Park[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.park.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
      include: {
        Bike: true, // Include related park data
      },
    });
  }

  async create(data: Prisma.ParkCreateInput): Promise<Park> {
    return this.prisma.park.create({
      data,
    });
  }

  async update(params: {
    where: Prisma.ParkWhereUniqueInput;
    data: Prisma.ParkUpdateInput;
  }): Promise<Park> {
    const { data, where } = params;
    return this.prisma.park.update({
      data,
      where,
    });
  }

  async delete(where: Prisma.ParkWhereUniqueInput): Promise<Park> {
    return this.prisma.park.delete({
      where,
    });
  }
}
