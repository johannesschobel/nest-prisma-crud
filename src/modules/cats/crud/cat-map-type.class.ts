import { Prisma } from '@prisma/client';
import { CrudMapType } from 'src/modules/crud/interfaces/crud-map-type.interface';

export class CatMapType implements CrudMapType {
  aggregate: Prisma.CatAggregateArgs;
  count: Prisma.CatCountArgs;
  create: Prisma.CatCreateArgs;
  delete: Prisma.CatDeleteArgs;
  deleteMany: Prisma.CatDeleteManyArgs;
  findFirst: Prisma.CatFindFirstArgs;
  findMany: Prisma.CatFindManyArgs;
  findUnique: Prisma.CatFindUniqueArgs;
  update: Prisma.CatUpdateArgs;
  updateMany: Prisma.CatUpdateManyArgs;
  upsert: Prisma.CatUpsertArgs;
}
