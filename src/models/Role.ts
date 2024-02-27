
/// COMANDO PARA CREAR MODELO ENTITY
//// npx typeorm entity:create ./src//models/Role

import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { User } from "./User";

@Entity('roles')
export class Role extends BaseEntity{
    @PrimaryGeneratedColumn()
    id!: number;
    @Column({name: 'name'})
    name!: string;
 
    @OneToMany(() => User, (user) => user.role)
    users!: User[];
}
