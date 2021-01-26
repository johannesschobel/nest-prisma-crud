import { Module } from '@nestjs/common';
import { DogsService } from './dogs.service';
import { DogsController } from './dogs.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { DogsCrudService } from './crud/dogs-crud.service';
import { DogsCrudController } from './crud/dogs-crud.controller';

@Module({
  imports: [PrismaModule],
  controllers: [DogsController, DogsCrudController],
  providers: [DogsService, DogsCrudService],
})
export class DogsModule {}
