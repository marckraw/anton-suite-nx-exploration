import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SmokeTestController } from './smoke-test.controller';
import { SmokeTestService } from './smoke-test.service';

@Module({
  imports: [],
  controllers: [AppController, SmokeTestController],
  providers: [AppService, SmokeTestService],
})
export class AppModule {}
