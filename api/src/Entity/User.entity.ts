import { Entity, Column, OneToMany, OneToOne, JoinColumn } from "typeorm";
import { LogEntry } from "./LogEntry.entity";
import { PersonalInformation } from "./PersonalInformation.entity";
import { BaseEntity } from "./BaseEntity.entity";

@Entity()
export class User extends BaseEntity {

    @Column({ type: "varchar" })
    firstName: string;

    @Column({ type: "varchar" })
    lastName: string;

    @Column({ default: true })
    isActive: boolean;

    @Column({ type: "varchar" })
    profilePicture: string;

    @OneToMany(() => LogEntry, entry => entry.user)
    logEntries: LogEntry[]

    @OneToOne(() => PersonalInformation)
    @JoinColumn()
    personalInformation: PersonalInformation;


}