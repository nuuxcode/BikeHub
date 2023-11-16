import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { Prisma, PrismaClient } from '@prisma/client';

import { UserListener } from '../user/user.listener';

import { PRISMA_LOG_CONFIG } from './prisma.config';

@Injectable()
export class PrismaService
  extends PrismaClient<Prisma.PrismaClientOptions, 'error' | 'query'>
  implements OnModuleInit, OnModuleDestroy
{
  constructor() {
    super({
      log: PRISMA_LOG_CONFIG,
    });

    this.$on('error', (_e) => {
      // TODO: error msg
    });

    this.$use(UserListener.onCreated);
  }

  async onModuleInit() {
    await this.$connect();
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }
}
