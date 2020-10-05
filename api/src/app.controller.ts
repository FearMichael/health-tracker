import { Controller, Get, Req, Res } from '@nestjs/common';
import { ResponseObject } from '@nestjs/swagger/dist/interfaces/open-api-spec.interface';
import { join } from 'path';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  // Serve front end if not an api request
  @Get("somewhere")
  getHello(): string {
    return "hello";
  }
}
