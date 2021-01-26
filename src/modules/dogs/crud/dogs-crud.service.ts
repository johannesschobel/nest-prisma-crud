import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { CrudService } from 'src/modules/crud/crud.service';
import { PrismaService } from 'src/modules/prisma/prisma.service';
import { DogMapType } from './dog-map-type.class';

@Injectable()
export class DogsCrudService extends CrudService<
  Prisma.DogDelegate,
  DogMapType
> {
  constructor(private readonly prisma: PrismaService) {
    super(prisma.dog);
  }

  // everything is set up
}
