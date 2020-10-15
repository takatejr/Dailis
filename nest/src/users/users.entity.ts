import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { User } from '../model/user';

@Entity()
export class UsersEntity implements User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('text')
    login: string

    @Column('text')
    password: string

    @Column('table')
    lists: number[]
    
    @Column('text')
    type: string

}
