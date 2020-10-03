import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User.entity";

@Entity()
export class LogEntry {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({ type: "timestamp" })
    date: string;

    @Column({ type: "text" })
    notes: string;

    @ManyToOne(type => User, user => user.logEntries)
    user: User;



}
