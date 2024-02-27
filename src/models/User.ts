import { Column, Entity, JoinColumn, ManyToMany, PrimaryGeneratedColumn, Timestamp } from "typeorm"
import { Role } from "./Role";

@Entity('users')
export class User {

    @PrimaryGeneratedColumn()
    id!: number;
    @Column({'name': 'name'})
    name!: string;

    @Column({'name': 'password'})
    password!: string;

    @Column({'name': 'email'})
    email!: string;

    @Column({'name': 'role_id'})
    role_id!: number;

    @Column({'name': 'created_at'})
    created_at!: Date;

    @Column({'name': 'is_active'})
    is_active!: boolean;

    @ManyToMany(() => Role, (role) => role.users)
    @JoinColumn({name: "role_id",})
    role!: Role;

}
