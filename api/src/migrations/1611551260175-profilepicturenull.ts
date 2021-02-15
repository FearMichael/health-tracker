import {MigrationInterface, QueryRunner} from "typeorm";

export class profilepicturenull1611551260175 implements MigrationInterface {
    name = 'profilepicturenull1611551260175'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `user` CHANGE `profilePicture` `profilePicture` varchar(255) NULL DEFAULT NULL");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `user` CHANGE `profilePicture` `profilePicture` varchar(255) NULL");
    }

}
