
import 'dotenv/config';
import "reflect-metadata";
import { DataSource } from "typeorm";
import { Roles1708946185209 } from "./migrations/1708946185209-roles";
import { Users1708948581768 } from './migrations/1708948581768-users';
import { Users1709025174650 } from './migrations/1709025174650-users';

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3308,
    username: "root",
    password: "2345",
    database: "new_libreria",
    entities: [],
    migrations:[Roles1708946185209, Users1708948581768, Users1709025174650],
    synchronize: false,
    logging: false,
})