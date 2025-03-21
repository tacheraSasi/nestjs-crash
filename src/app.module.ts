import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChicksController } from './chicks/chicks.controller';
import { ChicksService } from './chicks/chicks.service';
import { ChicksModule } from './chicks/chicks.module';
import { ToysModule } from './toys/toys.module';

@Module({
  imports: [ChicksModule, ToysModule],
  controllers: [AppController, ChicksController],
  providers: [AppService, ChicksService],
})
export class AppModule {}
