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
import { CatsService } from './cats.service';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Post()
  async create(@Body() data: CreateCatDto) {
    const dto: Prisma.CatCreateArgs = {
      data: {
        name: data.name,
        age: data.age,
        alive: data.alive,
      },
    };
    return await this.catsService.create(dto);
  }

  @Get()
  async findAll() {
    const dto: Prisma.CatFindManyArgs = {
      where: {},
    };
    return await this.catsService.findMany(dto);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const dto: Prisma.CatFindUniqueArgs = {
      where: { id: +id },
    };
    return await this.catsService.findUnique(dto);
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
