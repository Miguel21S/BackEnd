import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class AuthorbookFavourite1709038370387 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "authorbook_favourite",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment",
                    },
                    {
                        name: "author_id",
                        type: "int",
                        isNullable: false
                    },
                    {
                        name: "book_id",
                        type: "int",
                        isNullable: false
                    },
                ],
                foreignKeys: [
                    {
                        columnNames: ["author_id"],
                        referencedTableName: "authors",
                        referencedColumnNames: ["id"],
                        onDelete: "CASCADE"
                    },
                    {
                        columnNames: ["book_id"],
                        referencedTableName: "books",
                        referencedColumnNames: ["id"],
                        onDelete: "CASCADE"
                    }]
            }),
            true
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("authorbook_favourite");
    }

}
