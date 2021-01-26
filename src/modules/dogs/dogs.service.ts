import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/modules/prisma/prisma.service';

@Injectable()
export class DogsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: Prisma.DogCreateArgs) {
    return await this.prisma.dog.create(data);
  }

  async findMany(data: Prisma.DogFindManyArgs) {
    return await this.prisma.dog.findMany(data);
  }

  async findUnique(data: Prisma.DogFindUniqueArgs) {
    return await this.prisma.dog.findUnique(data);
  }

  // ... other methods here
}
