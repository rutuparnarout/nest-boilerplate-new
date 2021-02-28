import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpadteUserDto } from './dto/update-user.dto';
import { User } from './entity/user.entity';
import { UserRepo } from './user.repo';

@Injectable()
export class UserService {
    constructor(private readonly userRepo: UserRepo) {}

    async getUsers() {
        return await this.userRepo.getUsers();
    }

    async getUserById(id: number) {
        return await this.userRepo.getUserById(id);
    }

    async createUser(input: CreateUserDto) {
        const user = User.createUser(input.firstName, input.lastName, input.email, input.age, input.phoneNumber, input.password);

        return await this.userRepo.createUser(user);
    }

    async updateUser(user: User, input: UpadteUserDto) {
        const userObj = user.updateUser(user.id, input.firstName, input.lastName, input.age, input.phoneNumber);
        return await this.userRepo.updateUser(userObj);
    }
}
