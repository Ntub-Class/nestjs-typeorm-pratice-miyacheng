import {MigrationInterface, QueryRunner} from "typeorm";

export class user1576224216829 implements MigrationInterface {
    name = 'user1576224216829'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `name`", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `user` ADD `name` varchar(255) NOT NULL", undefined);
    }

}
