import { Injectable } from '@nestjs/common';
import { LogEntry } from 'src/entities/LogEntry.entity';
import { SortDirection } from 'src/global/Interfaces/query.enum';
import { getRepository, LessThanOrEqual, MoreThanOrEqual } from 'typeorm';
import { getTime } from "date-fns";

@Injectable()
export class ChartsService {

    findAll(start: string, end: string, orderDir: SortDirection) {
        // TODO remove this and get this working
        console.log(orderDir);
        // const manager = getManager();
        // manager.find(LogEntry, { select: ["rating"], where: { createdAt: MoreThanOrEqual(start) } })
        const startTime = getTime(new Date(start));
        const endTime = getTime(new Date(end));


        return getRepository(LogEntry)
            .createQueryBuilder("log")
            .select(["rating", "createdAt"])
            .where("log.createdAt = :created", { created: MoreThanOrEqual(startTime) })
            .andWhere("log.createdAt = :createdAt", { createdAt: LessThanOrEqual(endTime) })
            // .orderBy("log.createdAt", orderDir)
            .getManyAndCount();
    }

}
