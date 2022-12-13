import {
  Controller,
  Get,
  Render,
} from '@nestjs/common';
import { query } from 'express';
import { AppService } from './app.service';
import db from './db';
import { MacskaDto } from './macska.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('fooldal')
  async listMacskak(){
    const [rows]=await db.execute('SELECT * FROM macska_db');

    return{
      macskak: rows,
    };

  }
  



}
