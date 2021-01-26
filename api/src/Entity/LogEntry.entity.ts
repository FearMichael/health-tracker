import { Column, Entity, ManyToOne, ManyToMany, JoinTable } from "typeorm";
import { User } from "./User.entity";
import { BaseEntity } from "./BaseEntity.entity";
// import { RatingValues } from "../global/Enums/rating.enum";
import { ApiProperty } from "@nestjs/swagger";
import { LogRating } from "./LogRating.entity";

@Entity()
export class LogEntry extends BaseEntity {

    @ApiProperty()
    @Column({ type: "varchar" })
    date: string;

    @ApiProperty()
    @Column({ type: "text", nullable: false })
    notes: string;

    @ApiProperty({ type: () => User })
    @ManyToOne(() => User, user => user.logEntries)
    user: User;

    @ApiProperty({ type: () => LogRating })
    @ManyToMany(() => LogRating)
    @JoinTable()
    questions: LogRating[];
}
