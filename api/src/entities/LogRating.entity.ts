import { Column, Entity, ManyToOne } from "typeorm";
import { User } from "./User.entity";
import { BaseEntity } from "./BaseEntity.entity";
import { RatingValues } from "../global/Enums/rating.enum";
import { ApiProperty } from "@nestjs/swagger";
import { IsDefined } from "class-validator";
import { LogEntry } from "./LogEntry.entity";
import { LogQuestion } from "./LogQuestion.entity";

@Entity()
export class LogRating extends BaseEntity {

    @ApiProperty()
    @Column({ type: "varchar" })
    date: string;

    @ApiProperty()
    @Column({ type: "text", nullable: false })
    notes: string;

    @ApiProperty({ type: () => User })
    @ManyToOne(() => User, user => user.logEntries)
    user: User;

    @ManyToOne(() => LogQuestion, logQuestion => logQuestion.entries)
    questionType: LogQuestion;

    @ApiProperty()
    @Column({ type: "enum", enum: RatingValues, nullable: false })
    @IsDefined()
    rating: number;

    @ManyToOne(() => LogEntry, logEntry => logEntry.responses)
    entry: LogEntry;


}
