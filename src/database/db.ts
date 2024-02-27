
import 'dotenv/config';
import "reflect-metadata";
import { DataSource } from "typeorm";
import { Roles1708946185209 } from "./migrations/1708946185209-roles";
import { Users1708948581768 } from './migrations/1708948581768-users';
import { Users1709025174650 } from './migrations/1709025174650-users';
import { Books1709031084741 } from './migrations/1709031084741-books';
import { Role } from '../models/Role';
import { User } from '../models/User';

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3308,
    username: "root",
    password: "2345",
    database: "new_libreria",
    entities: [Role, User],
    migrations:[Roles1708946185209, Users1708948581768, Users1709025174650, Books1709031084741],
    synchronize: false,
    logging: false,
})