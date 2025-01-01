import { Test, TestingModule } from '@nestjs/testing';
import { ChicksController } from './chicks.controller';

describe('ChicksController', () => {
  let controller: ChicksController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ChicksController],
    }).compile();

    controller = module.get<ChicksController>(ChicksController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
