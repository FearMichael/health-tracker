import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LogQuestion } from 'src/entities';
import { Repository } from 'typeorm';

@Injectable()
export class LogquestionsService {
    constructor(
        @InjectRepository(LogQuestion) private repo: Repository<LogQuestion>
    ) { }

    public get() {
        return this.repo.find();
    }
}
