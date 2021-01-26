import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { CatsModule } from './modules/cats/cats.module';
import { DogsModule } from './modules/dogs/dogs.module';
import { PrismaModule } from './modules/prisma/prisma.module';

@Module({
  imports: [CatsModule, DogsModule, PrismaModule],
  controllers: [AppController],
  providers: [],
  exports: [],
})
export class AppModule {}
