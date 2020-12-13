import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User.entity";
import { BaseEntity } from "./BaseEntity";
import { RatingValues } from "../global/Enums/rating.enum";

@Entity()
export class LogEntry extends BaseEntity {

    @Column({ type: "varchar" })
    date: string;

    @Column({ type: "text", nullable: false })
    notes: string;

    @ManyToOne(type => User, user => user.logEntries)
    user: User;

    @Column({ type: "enum", enum: RatingValues, nullable: false })
    rating: number;

}
