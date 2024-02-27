import { BaseEntity, Column, Entity, JoinColumn, ManyToMany, ManyToOne, PrimaryGeneratedColumn, Timestamp } from "typeorm"
import { Role } from "./Role";

@Entity('users')
export class User extends BaseEntity{

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

    @ManyToOne(() => Role, (role) => role.users)
    @JoinColumn({name: "role_id",})
    role!: Role;

}
