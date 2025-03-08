import { Test, TestingModule } from '@nestjs/testing';
import { ToysService } from './toys.service';

describe('ToysService', () => {
  let service: ToysService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ToysService],
    }).compile();

    service = module.get<ToysService>(ToysService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
