import { Get, Module, Param } from '@nestjs/common';
import { ChicksService } from './chicks.service';

@Module({
  controllers: [ChicksModule],
  providers: [ChicksService],
  exports: [],
})
export class ChicksModule {
  @Get(':id')
  findOne(@Param("id") id:string): string {
    return `This action returns a cat with id: ${id}`;
  }
}
