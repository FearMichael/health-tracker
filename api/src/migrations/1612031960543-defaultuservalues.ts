import {MigrationInterface, QueryRunner} from "typeorm";

export class defaultuservalues1612031960543 implements MigrationInterface {
    name = 'defaultuservalues1612031960543'

    public async up(queryRunner: QueryRunner): Promise<void> {
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
        await queryRunner.query("ALTER TABLE `user` CHANGE `firstName` `firstName` varchar(255) NOT NULL DEFAULT ''");
        await queryRunner.query("ALTER TABLE `user` CHANGE `lastName` `lastName` varchar(255) NOT NULL DEFAULT ''");
        await queryRunner.query("ALTER TABLE `user` CHANGE `profilePicture` `profilePicture` varchar(255) NULL DEFAULT NULL");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `user` CHANGE `profilePicture` `profilePicture` varchar(255) NULL");
        await queryRunner.query("ALTER TABLE `user` CHANGE `lastName` `lastName` varchar(255) NOT NULL");
        await queryRunner.query("ALTER TABLE `user` CHANGE `firstName` `firstName` varchar(255) NOT NULL");
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
    }

}
