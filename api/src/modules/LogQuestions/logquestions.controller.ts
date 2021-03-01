import { Controller, Get } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import { InjectRepository } from '@nestjs/typeorm';
import { LogQuestion } from 'src/entities';
import { LogquestionsService } from './logquestions.service';

@Controller('logquestions')
export class LogquestionsController {
    constructor(
        private service: LogquestionsService
    ) { }

    @Get("/")
    @ApiResponse({ status: 200, description: "Gets all log questions", type: [LogQuestion] })
    @ApiResponse({ status: 403, description: "Unauthorized access" })
    public get() {
        return this.service.get();
    }
}
