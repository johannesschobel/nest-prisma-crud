import { Module } from '@nestjs/common';
import { CatsService } from './cats.service';
import { CatsController } from './cats.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { CatsCrudService } from './crud/cats-crud.service';
import { CatsCrudController } from './crud/cat-crud.controller';

@Module({
  imports: [PrismaModule],
  controllers: [CatsController, CatsCrudController],
  providers: [CatsService, CatsCrudService],
})
export class CatsModule {}
