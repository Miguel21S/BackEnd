import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Loans1709113283031 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "loans",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment",
                    },
                    {
                        name: "load_date",
                        type: "Timestamp",
                        default: "now()",
                        onUpdate: "now()"
                    },
                    {
                        name: "due_date",
                        type: "Timestamp",
                        default: "now()",
                        isNullable: false
                    },
                    {
                        name: "return_date",
                        type: "Timestamp",
                        default: "now()",
                        isNullable: false
                    },
                    {
                        name: "book_id",
                        type: "int",
                        isNullable: false
                    },
                    {
                        name: "user_id",
                        type: "int",
                        isNullable: false
                    }
                ],
                foreignKeys: [
                    {
                        name: "FK_loans_books",
                        columnNames: ["book_id"],
                        referencedTableName: "books",
                        referencedColumnNames: ["id"],
                        onDelete: "CASCADE"
                    },
                    {
                        name: "FK_loans_users",
                        columnNames: ["user_id"],
                        referencedTableName: "users",
                        referencedColumnNames: ["id"],
                        onDelete: "CASCADE"
                    }]
            }),
            true
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("loans");
    }

}
