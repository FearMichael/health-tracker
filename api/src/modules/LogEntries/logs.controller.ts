import { Controller, Get, Post, Req } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import { Request } from 'express';
import { LogQuestion } from 'src/entities';
import { LogsService } from './logs.service';

@Controller('logs')
export class LogsController {

    constructor(
        private logService: LogsService
    ) { }

    @Get("/")
    @ApiResponse({ status: 200, description: "Gets all log questions", type: [LogQuestion] })
    @ApiResponse({ status: 403, description: "Unauthorized access" })
    async get(@Req() req: Request) {
        return this.logService.read();
    }

    @Post("/")
    async create(@Req() req: Request) {
        return this.logService.create(req.body);
    }

}
