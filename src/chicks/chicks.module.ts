import { Get, Module, Param } from '@nestjs/common';
import { ChicksService } from './chicks.service';
import { ChicksController } from './chicks.controller';

@Module({
  controllers: [ChicksController],
  providers: [ChicksService],
  exports: [],
})
export class ChicksModule {
  @Get(':id')
  findOne(@Param("id") id:string): string {
    return `This action returns a cat with id: ${id}`;
  }
}
