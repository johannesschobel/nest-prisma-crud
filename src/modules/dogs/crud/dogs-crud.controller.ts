import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DogsCrudService } from './dogs-crud.service';
import { CreateDogDto } from './../dto/create-dog.dto';
import { UpdateDogDto } from './../dto/update-dog.dto';

@Controller('crud/dogs')
export class DogsCrudController {
  constructor(private readonly dogsCrudService: DogsCrudService) {}

  @Post()
  async create(@Body() data: CreateDogDto) {
    const dto: Prisma.DogCreateArgs = {
      data: {
        name: data.name,
        color: data.color,
        height: data.height,
        weight: data.weight,
      },
    };
    return await this.dogsCrudService.create(dto);
  }

  @Get()
  async findAll() {
    const dto: Prisma.DogFindManyArgs = {
      where: {},
    };
    return await this.dogsCrudService.findMany(dto);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const dto: Prisma.CatFindUniqueArgs = {
      where: { id: +id },
    };
    return await this.dogsCrudService.findUnique(dto);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() data: UpdateDogDto) {
    // actual implementation
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    // actual implementation
  }
}
