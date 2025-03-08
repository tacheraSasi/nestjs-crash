import { Module } from '@nestjs/common';
import { ToysController } from './toys.controller';

@Module({
  controllers: [ToysController]
})
export class ToysModule {}
