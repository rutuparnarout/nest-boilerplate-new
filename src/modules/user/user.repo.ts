import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entity/user.entity';

@Injectable()
export class UserRepo {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>
    ) {}

    async getUsers() {
        return await this.userRepository.find({
            where: {
                isActive: true
            }
        });
    }

    async getUserById(id: number) {
        return await this.userRepository.findOne({
            where: {
                id: id,
                isActive: true
            }
        });
    }

    async createUser(user: User) {
        return await this.userRepository.save(user);
    }

    async updateUser(user: User) {
        return await this.userRepository.save({ ...user });
    }
}
