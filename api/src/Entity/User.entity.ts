import { Entity, Column, PrimaryGeneratedColumn, OneToMany, OneToOne, JoinColumn } from "typeorm";
import { LogEntry } from "./LogEntry.entity";
import { PersonalInformation } from "./PersonalInformation.entity";

@Entity()
export class User {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({ type: "varchar" })
    firstName: string;

    @Column({ type: "varchar" })
    lastName: string;

    @Column({ default: true })
    isActive: boolean;

    @Column({ type: "varchar" })
    profilePicture: string;

    @OneToMany(type => LogEntry, entry => entry.user)
    logEntries: LogEntry[]

    @OneToOne(type => PersonalInformation)
    @JoinColumn()
    personalInformation: PersonalInformation;


}