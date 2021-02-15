import { Entity, Column, OneToOne, JoinColumn } from "typeorm";
import { BaseEntity } from "./BaseEntity.entity";
import { User } from "./User.entity";

@Entity()
export class Address extends BaseEntity {

    @Column({ type: "varchar", default: null })
    address1: string;

    @Column({ type: "varchar", default: null })
    address2: string;

    @Column({ type: "varchar", default: null })
    address3: string;

    @Column({ type: "varchar", default: null })
    city: string;

    @Column({ type: "varchar", default: null })
    state: string;

    @Column({ type: "varchar", default: null })
    postal: string;

    @Column({ type: "varchar", default: null })
    country: string;

}