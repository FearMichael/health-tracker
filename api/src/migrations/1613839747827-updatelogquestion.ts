import {MigrationInterface, QueryRunner} from "typeorm";

export class updatelogquestion1613839747827 implements MigrationInterface {
    name = 'updatelogquestion1613839747827'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `log_entry` DROP FOREIGN KEY `FK_d27aa1e87fddd70ed7229325f83`");
        await queryRunner.query("ALTER TABLE `log_entry` DROP COLUMN `questionTypeId`");
        await queryRunner.query("ALTER TABLE `log_question` ADD `text` varchar(255) NOT NULL");
        await queryRunner.query("ALTER TABLE `log_rating` ADD `questionTypeId` varchar(36) NULL");
        await queryRunner.query("ALTER TABLE `log_rating` ADD `entryId` varchar(36) NULL");
        await queryRunner.query("ALTER TABLE `address` CHANGE `address1` `address1` varchar(255) NULL DEFAULT NULL");
        await queryRunner.query("ALTER TABLE `address` CHANGE `address2` `address2` varchar(255) NULL DEFAULT NULL");
        await queryRunner.query("ALTER TABLE `address` CHANGE `address3` `address3` varchar(255) NULL DEFAULT NULL");
        await queryRunner.query("ALTER TABLE `address` CHANGE `city` `city` varchar(255) NULL DEFAULT NULL");
        await queryRunner.query("ALTER TABLE `address` CHANGE `state` `state` varchar(255) NULL DEFAULT NULL");
        await queryRunner.query("ALTER TABLE `address` CHANGE `postal` `postal` varchar(255) NULL DEFAULT NULL");
        await queryRunner.query("ALTER TABLE `address` CHANGE `country` `country` varchar(255) NULL DEFAULT NULL");
        await queryRunner.query("ALTER TABLE `personal_information` CHANGE `birthdate` `birthdate` datetime NULL DEFAULT NULL");
        await queryRunner.query("ALTER TABLE `personal_information` CHANGE `age` `age` int NULL DEFAULT NULL");
        await queryRunner.query("ALTER TABLE `personal_information` CHANGE `alternateEmail` `alternateEmail` varchar(255) NULL DEFAULT NULL");
        await queryRunner.query("ALTER TABLE `user` CHANGE `profilePicture` `profilePicture` varchar(255) NULL DEFAULT NULL");
        await queryRunner.query("ALTER TABLE `log_rating` ADD CONSTRAINT `FK_4dfa31d70668e082716f1e60313` FOREIGN KEY (`questionTypeId`) REFERENCES `log_question`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `log_rating` ADD CONSTRAINT `FK_fa9a2ce491ea232309079843b69` FOREIGN KEY (`entryId`) REFERENCES `log_entry`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `log_rating` DROP FOREIGN KEY `FK_fa9a2ce491ea232309079843b69`");
        await queryRunner.query("ALTER TABLE `log_rating` DROP FOREIGN KEY `FK_4dfa31d70668e082716f1e60313`");
        await queryRunner.query("ALTER TABLE `user` CHANGE `profilePicture` `profilePicture` varchar(255) NULL");
        await queryRunner.query("ALTER TABLE `personal_information` CHANGE `alternateEmail` `alternateEmail` varchar(255) NULL");
        await queryRunner.query("ALTER TABLE `personal_information` CHANGE `age` `age` int NULL");
        await queryRunner.query("ALTER TABLE `personal_information` CHANGE `birthdate` `birthdate` datetime NULL");
        await queryRunner.query("ALTER TABLE `address` CHANGE `country` `country` varchar(255) NULL");
        await queryRunner.query("ALTER TABLE `address` CHANGE `postal` `postal` varchar(255) NULL");
        await queryRunner.query("ALTER TABLE `address` CHANGE `state` `state` varchar(255) NULL");
        await queryRunner.query("ALTER TABLE `address` CHANGE `city` `city` varchar(255) NULL");
        await queryRunner.query("ALTER TABLE `address` CHANGE `address3` `address3` varchar(255) NULL");
        await queryRunner.query("ALTER TABLE `address` CHANGE `address2` `address2` varchar(255) NULL");
        await queryRunner.query("ALTER TABLE `address` CHANGE `address1` `address1` varchar(255) NULL");
        await queryRunner.query("ALTER TABLE `log_rating` DROP COLUMN `entryId`");
        await queryRunner.query("ALTER TABLE `log_rating` DROP COLUMN `questionTypeId`");
        await queryRunner.query("ALTER TABLE `log_question` DROP COLUMN `text`");
        await queryRunner.query("ALTER TABLE `log_entry` ADD `questionTypeId` varchar(36) NULL");
        await queryRunner.query("ALTER TABLE `log_entry` ADD CONSTRAINT `FK_d27aa1e87fddd70ed7229325f83` FOREIGN KEY (`questionTypeId`) REFERENCES `log_question`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

}
