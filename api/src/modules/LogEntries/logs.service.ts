import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LogEntry } from 'src/entities';
import { Repository } from 'typeorm';

@Injectable()
export class LogsService {

    constructor(
        @InjectRepository(LogEntry) private repo: Repository<LogEntry>
    ) { }

    public logsByUser(userId: string): Promise<LogEntry[]> {
        return this.repo.find({
            where: { userId },
            relations: ["logEntry.responses", "logEntry.responses.questionType"]
        })
    }

    public read(): Promise<LogEntry[]> {
        return this.repo.find({ relations: ["logEntry.responses", "logEntry.responses.questionType"] });
    }

    public create(entry: LogEntry): Promise<LogEntry> {
        const data = this.repo.create(entry);
        return this.repo.save(data);
    }

    public update(entry: Partial<LogEntry>): Promise<LogEntry> {
        return this.repo.save(entry);
    }

    public async remove(id: string): Promise<boolean> {
        const deleted = await this.repo.softDelete(id);
        return deleted ? true : false;
    }


}
