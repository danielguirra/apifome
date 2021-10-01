import { Controller, Get } from '@nestjs/common';
import { query } from 'express';
import { AppService } from './app.service';


@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }


  @Get('/comida' + query)
  getComida(): string {
    return this.appService.getComida(query.toString());
  }
}
