import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ToysService } from './toys.service';

export interface Toy {
  id: number;
  name: string;
  color: string;
}

@Controller('toys')
export class ToysController {
  constructor(private readonly toysService: ToysService) {}

  @Get()
  getToys() {
    return this.toysService.getToys();
  }

  @Post()
  addToy(@Body() toy: Toy) {
    return this.toysService.addToy(toy);
  }

  @Delete(':id')
  deleteToy(@Param('id') id: string) {
    return this.toysService.deleteToy(id);
  }
}
