import {MigrationInterface, QueryRunner} from "typeorm";

export class defaultAge1611634137567 implements MigrationInterface {
    name = 'defaultAge1611634137567'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP INDEX `IDX_217ba147c5de6c107f2fa7fa27` ON `user`");
        await queryRunner.query("ALTER TABLE `personal_information` CHANGE `age` `age` int NULL DEFAULT NULL");
        await queryRunner.query("ALTER TABLE `user` CHANGE `profilePicture` `profilePicture` varchar(255) NULL DEFAULT NULL");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `user` CHANGE `profilePicture` `profilePicture` varchar(255) NULL");
        await queryRunner.query("ALTER TABLE `personal_information` CHANGE `age` `age` int NOT NULL");
        await queryRunner.query("CREATE UNIQUE INDEX `IDX_217ba147c5de6c107f2fa7fa27` ON `user` (`addressId`)");
    }

}
