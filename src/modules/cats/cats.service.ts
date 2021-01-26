import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/modules/prisma/prisma.service';

@Injectable()
export class CatsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: Prisma.CatCreateArgs) {
    return await this.prisma.cat.create(data);
  }

  async findMany(data: Prisma.CatFindManyArgs) {
    return await this.prisma.cat.findMany(data);
  }

  async findUnique(data: Prisma.CatFindUniqueArgs) {
    return await this.prisma.cat.findUnique(data);
  }

  // ... other methods here
}
