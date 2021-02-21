import { Column, Entity, ManyToOne, ManyToMany, JoinTable, OneToMany } from "typeorm";
import { User } from "./User.entity";
import { BaseEntity } from "./BaseEntity.entity";
// import { RatingValues } from "../global/Enums/rating.enum";
import { ApiProperty } from "@nestjs/swagger";
import { LogRating } from "./LogRating.entity";
import { IsDefined } from "class-validator";
import { LogQuestion } from "./LogQuestion.entity";

@Entity()
export class LogEntry extends BaseEntity {

    /**
     * @description Need this defined but not auto-generated so users can create entries for previous days
     */
    @ApiProperty({ description: "Date for the log entry" })
    @Column({ type: "varchar", nullable: false })
    @IsDefined()
    date: string;

    @ApiProperty({ description: "User entered notes for the day" })
    @Column({ type: "text", nullable: true })
    notes: string;

    @ApiProperty({ type: () => User })
    @ManyToOne(() => User, user => user.logEntries)
    user: User;

    @ApiProperty({ type: () => LogRating })
    @OneToMany(() => LogRating, logRating => logRating.entry)
    @JoinTable()
    responses: LogRating[];
}
