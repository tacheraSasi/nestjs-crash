import { Controller, Get } from '@nestjs/common';
import { ChicksService } from './chicks.service';

@Controller('chicks')
export class ChicksController {
  constructor(private readonly ChicksService: ChicksService) {}
  @Get()
  findAll(): string {
    return this.ChicksService.getAllChicks();
  }
}
