import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { CrudService } from 'src/modules/crud/crud.service';
import { PrismaService } from 'src/modules/prisma/prisma.service';
import { CatMapType } from './cat-map-type.class';

@Injectable()
export class CatsCrudService extends CrudService<
  Prisma.CatDelegate,
  CatMapType
> {
  constructor(private readonly prisma: PrismaService) {
    super(prisma.cat);
  }

  // everything is set up
}
