import { CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn, VersionColumn } from "typeorm";

@Entity()
export class BaseEntity {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @CreateDateColumn()
    createdAt: string;

    @UpdateDateColumn()
    updatedAt: string;

    // Set when a soft delete is called on the entity managere
    @DeleteDateColumn()
    deletedAt: string;

    // updated each time the entity is saved, just an incremental number
    @VersionColumn()
    version: number;

}
