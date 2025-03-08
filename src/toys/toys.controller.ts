import { Body, Controller, Get, Post } from '@nestjs/common';

interface Toy {
  id: number;
  name: string;
  color: string;
}

@Controller('toys')
export class ToysController {
  private toys = [
    { id: 1, name: 'Teddy Bear', color: 'brown' },
    { id: 2, name: 'Doll', color: 'pink' },
    { id: 3, name: 'Car', color: 'red' },
  ];
  
  @Get()
  getToys() {
    return this.toys;
  }
  
  @Post()
  addToy(@Body() toy:Toy){
    const newId = this.toys.length + 1;
    const newToy = { ...toy, id: newId };
    this.toys.push(newToy);
    return newToy;
  }
}
