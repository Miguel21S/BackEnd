
import 'dotenv/config';
import "reflect-metadata";
import { DataSource } from "typeorm";
import { Roles1708946185209 } from "./migrations/1708946185209-roles";
import { Books1709031084741 } from './migrations/1709031084741-books';
import { Role } from '../models/Role';
import { User } from '../models/User';
import { Author1709038022867 } from './migrations/1709038022867-author';
import { AuthorbookFavourite1709038370387 } from './migrations/1709038370387-authorbook_favourite';
import { Users1709110164253 } from './migrations/1709110164253-users';
import { Users1709110254377 } from './migrations/1709110254377-users';
import { Loans1709113283031 } from './migrations/1709113283031-loans';

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3308,
    username: "root",
    password: "2345",
    database: "new_libreria",
    entities: [Role, User],
    migrations:[
        Roles1708946185209,
        Users1709110164253,
        Users1709110254377, 
        Books1709031084741,
        Loans1709113283031,
        Author1709038022867,
        AuthorbookFavourite1709038370387],
    synchronize: false,
    logging: false,
})