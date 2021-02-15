import { Column, Entity, ManyToOne } from "typeorm";
import { User } from "./User.entity";
import { BaseEntity } from "./BaseEntity.entity";
import { RatingValues } from "../global/Enums/rating.enum";
import { ApiProperty } from "@nestjs/swagger";

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

    @ApiProperty()
    @Column({ type: "enum", enum: RatingValues, nullable: false })
    rating: number;
}
