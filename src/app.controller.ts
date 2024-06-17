import { Controller, Get } from '@nestjs/common';
import { IAppService } from './app.service';
import { Inject } from '@nestjs/common';

@Controller()
export class AppController {
  constructor(
    @Inject('IAppService') private readonly appService: IAppService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
