/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Entity, Column, BeforeInsert, OneToMany, BaseEntity } from 'typeorm';
import { AbstarctEntity } from '../../shared/entity/abstract.entity';
import { UserAddress } from './user-address.entity';

@Entity()
export class User extends AbstarctEntity {
    private constructor() {
        super();
    }

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    email: string;

    @Column()
    age: number;

    @Column()
    phoneNumber: string;

    @Column()
    password: string;

    @OneToMany((type) => UserAddress, (userAddress) => userAddress.user)
    userAddress: UserAddress[];

    static createUser(firstName: string, lastName: string, email: string, age: number, phoneNumber: string, password: string) {
        const user = new User();
        user.firstName = firstName;
        user.lastName = lastName;
        user.email = email;
        user.age = age;
        user.phoneNumber = phoneNumber;
        user.password = password;
        return user;
    }

    updateUser(id: number, firstName: string, lastName: string, age: number, phoneNumber: string) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.phoneNumber = phoneNumber;
        return this;
    }
}
