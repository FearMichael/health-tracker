import {MigrationInterface, QueryRunner} from "typeorm";

export class addressModel1611634016115 implements MigrationInterface {
    name = 'addressModel1611634016115'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `address` (`id` varchar(36) NOT NULL, `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `deletedAt` datetime(6) NULL, `version` int NOT NULL, `address1` varchar(255) NOT NULL, `address2` varchar(255) NOT NULL, `address3` varchar(255) NOT NULL, `city` varchar(255) NOT NULL, `state` varchar(255) NOT NULL, `postal` varchar(255) NOT NULL, `country` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `personal_information` ADD `alternateEmail` varchar(255) NOT NULL");
        await queryRunner.query("ALTER TABLE `user` ADD `addressId` varchar(36) NULL");
        await queryRunner.query("ALTER TABLE `user` ADD UNIQUE INDEX `IDX_217ba147c5de6c107f2fa7fa27` (`addressId`)");
        await queryRunner.query("ALTER TABLE `user` CHANGE `profilePicture` `profilePicture` varchar(255) NULL DEFAULT NULL");
        await queryRunner.query("CREATE UNIQUE INDEX `REL_217ba147c5de6c107f2fa7fa27` ON `user` (`addressId`)");
        await queryRunner.query("ALTER TABLE `user` ADD CONSTRAINT `FK_217ba147c5de6c107f2fa7fa271` FOREIGN KEY (`addressId`) REFERENCES `address`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `user` DROP FOREIGN KEY `FK_217ba147c5de6c107f2fa7fa271`");
        await queryRunner.query("DROP INDEX `REL_217ba147c5de6c107f2fa7fa27` ON `user`");
        await queryRunner.query("ALTER TABLE `user` CHANGE `profilePicture` `profilePicture` varchar(255) NULL");
        await queryRunner.query("ALTER TABLE `user` DROP INDEX `IDX_217ba147c5de6c107f2fa7fa27`");
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `addressId`");
        await queryRunner.query("ALTER TABLE `personal_information` DROP COLUMN `alternateEmail`");
        await queryRunner.query("DROP TABLE `address`");
    }

}
