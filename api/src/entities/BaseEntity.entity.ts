import { BeforeInsert, BeforeUpdate, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn, VersionColumn } from "typeorm";
import { validateOrReject } from "class-validator";

@Entity()
export class BaseEntity {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @CreateDateColumn()
    createdAt: string;

    @UpdateDateColumn()
    updatedAt: string;

    // Set when a soft delete is called on the entity manager
    @DeleteDateColumn()
    deletedAt: string;

    // updated each time the entity is saved, just an incremental number
    @VersionColumn()
    version: number;

    @BeforeInsert()
    @BeforeUpdate()
    private async validate() {
        return await validateOrReject(this);
    }

}
