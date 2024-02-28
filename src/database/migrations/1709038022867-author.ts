import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Author1709038022867 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "authors",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment",
                    },
                    {
                        name: "name",
                        type: "varchar",
                        length: "255",
                        isNullable: false
                    },
                    {
                        name: "nacionalidad",
                        type: "varchar",
                        length: "255",
                        isNullable: false
                    }
                    
                ],
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("authors");
    }

}
