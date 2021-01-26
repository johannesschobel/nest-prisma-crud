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
import { CreateCatDto } from './../dto/create-cat.dto';
import { UpdateCatDto } from './../dto/update-cat.dto';
import { CatsCrudService } from './cats-crud.service';

@Controller('crud/cats')
export class CatsCrudController {
  constructor(private readonly catsCrudService: CatsCrudService) {}

  @Post()
  async create(@Body() data: CreateCatDto) {
    const dto: Prisma.CatCreateArgs = {
      data: {
        name: data.name,
        age: data.age,
        alive: data.alive,
      },
    };
    return await this.catsCrudService.create(dto);
  }

  @Get()
  async findAll() {
    const dto: Prisma.CatFindManyArgs = {
      where: {},
    };
    return await this.catsCrudService.findMany(dto);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const dto: Prisma.CatFindUniqueArgs = {
      where: { id: +id },
    };
    return await this.catsCrudService.findUnique(dto);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() data: UpdateCatDto) {
    // actual implementation
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    // actual implementation
  }
}
