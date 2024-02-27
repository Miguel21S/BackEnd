import { Column, Entity, PrimaryGeneratedColumn, Timestamp } from "typeorm"

@Entity('users')
export class Users {

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
    created_at!: Timestamp;

    @Column({'name': 'is_active'})
    is_active!: boolean;

}
