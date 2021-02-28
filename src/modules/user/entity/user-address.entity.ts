/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Entity, Column, BeforeInsert, OneToMany, BaseEntity, ManyToOne } from 'typeorm';
import { AbstarctEntity } from '../../shared/entity/abstract.entity';
import { User } from './user.entity';

@Entity()
export class UserAddress extends AbstarctEntity {
    private constructor() {
        super();
    }

    @Column()
    houseNo: string;

    @Column()
    street: string;

    @Column()
    city: string;

    @Column()
    state: number;

    @Column()
    country: string;

    @ManyToOne((type) => User, (user) => user.userAddress)
    user: User;

    static createUserAddress(houseNo: string, street: string, city: string, state: number, country: string) {
        const userAddress = new UserAddress();
        userAddress.houseNo = houseNo;
        userAddress.street = street;
        userAddress.city = city;
        userAddress.state = state;
        userAddress.country = country;
        return userAddress;
    }
}
