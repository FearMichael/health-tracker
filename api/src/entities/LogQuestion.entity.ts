import { Column, Entity, ManyToOne, ManyToMany, JoinTable, OneToMany } from "typeorm";
import { User } from "./User.entity";
import { BaseEntity } from "./BaseEntity.entity";
// import { RatingValues } from "../global/Enums/rating.enum";
import { ApiProperty } from "@nestjs/swagger";
import { LogRating } from "./LogRating.entity";
import { IsDefined } from "class-validator";
import { LogEntry } from "./LogEntry.entity";

@Entity()
export class LogQuestion extends BaseEntity {

    @ApiProperty({ description: "Text for the question" })
    @Column("varchar")
    @IsDefined()
    text: string;

    @ApiProperty({ type: () => LogRating })
    @OneToMany(() => LogRating, logRating => logRating.questionType)
    entries: LogEntry[];

}
