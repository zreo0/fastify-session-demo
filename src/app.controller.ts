import { Controller, Get, Session } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('getSession')
  getSession(@Session() session): string {
    const count = session.get('count');
    return `count is ${count}`;
  }
  @Get('setSession')
  setSession(@Session() session): string {
    const count = session.get('count');
    session.set('count', count + 1);
    return `new count is ${count}`;
  }
}
