import { Injectable } from '@nestjs/common';

@Injectable()
export class ChicksService {
  getAllChicks(): string {
    return 'All chicks';
  }
}
