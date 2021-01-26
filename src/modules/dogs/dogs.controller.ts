import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DogsService } from './dogs.service';
import { CreateDogDto } from './dto/create-dog.dto';
import { UpdateDogDto } from './dto/update-dog.dto';

@Controller('dogs')
export class DogsController {
  constructor(private readonly dogsService: DogsService) {}

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
    return await this.dogsService.create(dto);
  }

  @Get()
  async findAll() {
    const dto: Prisma.DogFindManyArgs = {
      where: {},
    };
    return await this.dogsService.findMany(dto);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const dto: Prisma.CatFindUniqueArgs = {
      where: { id: +id },
    };
    return await this.dogsService.findUnique(dto);
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
