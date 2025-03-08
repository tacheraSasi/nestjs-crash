import { Test, TestingModule } from '@nestjs/testing';
import { ToysController } from './toys.controller';

describe('ToysController', () => {
  let controller: ToysController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ToysController],
    }).compile();

    controller = module.get<ToysController>(ToysController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
