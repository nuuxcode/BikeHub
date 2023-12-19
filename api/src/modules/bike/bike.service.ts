import { Injectable } from '@nestjs/common';
import { Park, Bike, Prisma } from '@prisma/client';

import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class BikeService {
  constructor(private prisma: PrismaService) { }

  async findOne(
    bikeWhereUniqueInput: Prisma.BikeWhereUniqueInput,
  ): Promise<Bike | null> {
    return this.prisma.bike.findUnique({
      where: bikeWhereUniqueInput,
      include: {
        Park: true,
      },
    });
  }

  async findFirst(): Promise<Bike> {
    return this.prisma.bike.findFirst();
  }
  async findByStatus(status: string, limit?: number): Promise<Bike[]> {
    return this.prisma.bike.findMany({
      where: {
        status: status,
      },
      take: limit || undefined,
      include: {
        Park: true,
      },
    });
  }

  async findByParkAndStatus(parkId: number, status?: string, limit?: number): Promise<Bike[]> {
    const whereClause: any = { park_id: parkId };
    if (status) {
      whereClause.status = status;
    }

    return this.prisma.bike.findMany({
      where: whereClause,
      take: limit || undefined,
      include: {
        Park: true,
      },
    });
  }

  async findAll(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.BikeWhereUniqueInput;
    where?: Prisma.BikeWhereInput;
    orderBy?: Prisma.BikeOrderByWithRelationInput;
  }): Promise<Bike[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.bike.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
      include: {
        Park: true,
      },
    });
  }

  async create(data: Prisma.BikeCreateInput): Promise<Bike> {
    return this.prisma.bike.create({
      data,
    });
  }

  async update(params: {
    where: Prisma.BikeWhereUniqueInput;
    data: Prisma.BikeUpdateInput;
  }): Promise<Bike> {
    const { data, where } = params;
    return this.prisma.bike.update({
      data,
      where,
    });
  }

  async delete(where: Prisma.BikeWhereUniqueInput): Promise<Bike> {
    return this.prisma.bike.delete({
      where,
    });
  }
}
