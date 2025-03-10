import { Body, Delete, Get, Injectable, Param, Post } from '@nestjs/common';
import { Toy } from './toys.controller';

@Injectable()
export class ToysService {
  private toys = [
    { id: 1, name: 'Teddy Bear', color: 'brown' },
    { id: 2, name: 'Doll', color: 'pink' },
    { id: 3, name: 'Car', color: 'red' },
  ];

  @Get()
  getToys() {
    return this.toys;
  }

  @Get()
  getToy(@Param('id') id: string) {
    const toy = this.toys.find((toy) => toy.id == Number(id));
    return toy;
  }

  @Post()
  addToy(@Body() toy: Toy) {
    const newId = this.toys.length + 1;
    const newToy = { ...toy, id: newId };
    this.toys.push(newToy);
    return newToy;
  }

  @Delete(':id')
  deleteToy(@Param('id') id: string) {
    this.toys = this.toys.filter((toy) => toy.id !== Number(id));
    return { message: 'Toy deleted!' };
  }
}
