import { Controller, Get } from '@nestjs/common';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getData() {
    return this.appService.getData();
  }

  @Get('hello')
  getHello() {
    return this.appService.getHello();
  }

  @Get('completion')
  getCompletion() {
    return this.appService.getCompletion();
  }
}
