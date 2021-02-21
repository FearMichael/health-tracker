import {MigrationInterface, QueryRunner} from "typeorm";

export class addlogquestion1613411054058 implements MigrationInterface {
    name = 'addlogquestion1613411054058'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `log_question` (`id` varchar(36) NOT NULL, `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `deletedAt` datetime(6) NULL, `version` int NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `log_entry_responses_log_rating` (`logEntryId` varchar(36) NOT NULL, `logRatingId` varchar(36) NOT NULL, INDEX `IDX_8440c0f059f984e8141e0f1f77` (`logEntryId`), INDEX `IDX_8e18265bba6e63a5a6e847d7a9` (`logRatingId`), PRIMARY KEY (`logEntryId`, `logRatingId`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `log_entry` ADD `questionTypeId` varchar(36) NULL");
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
        await queryRunner.query("ALTER TABLE `log_entry` CHANGE `notes` `notes` text NULL");
        await queryRunner.query("ALTER TABLE `log_entry` ADD CONSTRAINT `FK_d27aa1e87fddd70ed7229325f83` FOREIGN KEY (`questionTypeId`) REFERENCES `log_question`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `log_entry_responses_log_rating` ADD CONSTRAINT `FK_8440c0f059f984e8141e0f1f77f` FOREIGN KEY (`logEntryId`) REFERENCES `log_entry`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `log_entry_responses_log_rating` ADD CONSTRAINT `FK_8e18265bba6e63a5a6e847d7a9f` FOREIGN KEY (`logRatingId`) REFERENCES `log_rating`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `log_entry_responses_log_rating` DROP FOREIGN KEY `FK_8e18265bba6e63a5a6e847d7a9f`");
        await queryRunner.query("ALTER TABLE `log_entry_responses_log_rating` DROP FOREIGN KEY `FK_8440c0f059f984e8141e0f1f77f`");
        await queryRunner.query("ALTER TABLE `log_entry` DROP FOREIGN KEY `FK_d27aa1e87fddd70ed7229325f83`");
        await queryRunner.query("ALTER TABLE `log_entry` CHANGE `notes` `notes` text NOT NULL");
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
        await queryRunner.query("ALTER TABLE `log_entry` DROP COLUMN `questionTypeId`");
        await queryRunner.query("DROP INDEX `IDX_8e18265bba6e63a5a6e847d7a9` ON `log_entry_responses_log_rating`");
        await queryRunner.query("DROP INDEX `IDX_8440c0f059f984e8141e0f1f77` ON `log_entry_responses_log_rating`");
        await queryRunner.query("DROP TABLE `log_entry_responses_log_rating`");
        await queryRunner.query("DROP TABLE `log_question`");
    }

}
