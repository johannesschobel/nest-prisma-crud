import { Prisma } from '@prisma/client';
import { CrudMapType } from 'src/modules/crud/interfaces/crud-map-type.interface';

export class DogMapType implements CrudMapType {
  aggregate: Prisma.DogAggregateArgs;
  count: Prisma.DogCountArgs;
  create: Prisma.DogCreateArgs;
  delete: Prisma.DogDeleteArgs;
  deleteMany: Prisma.DogDeleteManyArgs;
  findFirst: Prisma.DogFindFirstArgs;
  findMany: Prisma.DogFindManyArgs;
  findUnique: Prisma.DogFindUniqueArgs;
  update: Prisma.DogUpdateArgs;
  updateMany: Prisma.DogUpdateManyArgs;
  upsert: Prisma.DogUpsertArgs;
}
