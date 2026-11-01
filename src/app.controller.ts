import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get('health')
  getHealth() {
    return {
      status: 'ok',
      service: 'backend',
      timestamp: new Date().toISOString(),
    };
  }

  @Get('info')
  getInfo() {
    return {
      service: 'backend',
      framework: 'NestJS',
      runtime: process.version,
      timestamp: new Date().toISOString(),
    };
  }
}