import { Test, TestingModule } from '@nestjs/testing';
import { ChicksService } from './chicks.service';

describe('ChicksService', () => {
  let service: ChicksService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ChicksService],
    }).compile();

    service = module.get<ChicksService>(ChicksService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
