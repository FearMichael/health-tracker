import {MigrationInterface, QueryRunner} from "typeorm";

export class baseline1608744312849 implements MigrationInterface {
    name = 'baseline1608744312849'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `base_entity` (`id` varchar(36) NOT NULL, `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `deletedAt` datetime(6) NULL, `version` int NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `personal_information` (`id` varchar(36) NOT NULL, `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `deletedAt` datetime(6) NULL, `version` int NOT NULL, `birthdate` datetime NOT NULL, `age` int NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `user` (`id` varchar(36) NOT NULL, `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `deletedAt` datetime(6) NULL, `version` int NOT NULL, `firstName` varchar(255) NOT NULL, `lastName` varchar(255) NOT NULL, `isActive` tinyint NOT NULL DEFAULT 1, `profilePicture` varchar(255) NOT NULL, `personalInformationId` varchar(36) NULL, UNIQUE INDEX `REL_3f04cee14c74af225aeb27f722` (`personalInformationId`), PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `log_rating` (`id` varchar(36) NOT NULL, `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `deletedAt` datetime(6) NULL, `version` int NOT NULL, `date` varchar(255) NOT NULL, `notes` text NOT NULL, `rating` enum ('1', '2', '3', '4', '5', '6', '7', '8', '9', '10') NOT NULL, `userId` varchar(36) NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `log_entry` (`id` varchar(36) NOT NULL, `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `deletedAt` datetime(6) NULL, `version` int NOT NULL, `date` varchar(255) NOT NULL, `notes` text NOT NULL, `userId` varchar(36) NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `log_entry_questions_log_rating` (`logEntryId` varchar(36) NOT NULL, `logRatingId` varchar(36) NOT NULL, INDEX `IDX_868740f0d8c89159a88ca6445b` (`logEntryId`), INDEX `IDX_4f0bc0cb83901bf962956ae346` (`logRatingId`), PRIMARY KEY (`logEntryId`, `logRatingId`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `user` ADD CONSTRAINT `FK_3f04cee14c74af225aeb27f722a` FOREIGN KEY (`personalInformationId`) REFERENCES `personal_information`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `log_rating` ADD CONSTRAINT `FK_d5d69b36e1e6faa14c1b3e694ae` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `log_entry` ADD CONSTRAINT `FK_1e40c93ad0f32b59845fa0b66d4` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `log_entry_questions_log_rating` ADD CONSTRAINT `FK_868740f0d8c89159a88ca6445be` FOREIGN KEY (`logEntryId`) REFERENCES `log_entry`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `log_entry_questions_log_rating` ADD CONSTRAINT `FK_4f0bc0cb83901bf962956ae346e` FOREIGN KEY (`logRatingId`) REFERENCES `log_rating`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `log_entry_questions_log_rating` DROP FOREIGN KEY `FK_4f0bc0cb83901bf962956ae346e`");
        await queryRunner.query("ALTER TABLE `log_entry_questions_log_rating` DROP FOREIGN KEY `FK_868740f0d8c89159a88ca6445be`");
        await queryRunner.query("ALTER TABLE `log_entry` DROP FOREIGN KEY `FK_1e40c93ad0f32b59845fa0b66d4`");
        await queryRunner.query("ALTER TABLE `log_rating` DROP FOREIGN KEY `FK_d5d69b36e1e6faa14c1b3e694ae`");
        await queryRunner.query("ALTER TABLE `user` DROP FOREIGN KEY `FK_3f04cee14c74af225aeb27f722a`");
        await queryRunner.query("DROP INDEX `IDX_4f0bc0cb83901bf962956ae346` ON `log_entry_questions_log_rating`");
        await queryRunner.query("DROP INDEX `IDX_868740f0d8c89159a88ca6445b` ON `log_entry_questions_log_rating`");
        await queryRunner.query("DROP TABLE `log_entry_questions_log_rating`");
        await queryRunner.query("DROP TABLE `log_entry`");
        await queryRunner.query("DROP TABLE `log_rating`");
        await queryRunner.query("DROP INDEX `REL_3f04cee14c74af225aeb27f722` ON `user`");
        await queryRunner.query("DROP TABLE `user`");
        await queryRunner.query("DROP TABLE `personal_information`");
        await queryRunner.query("DROP TABLE `base_entity`");
    }

}
