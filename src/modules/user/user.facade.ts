import { HttpCode, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpadteUserDto } from './dto/update-user.dto';
import { UserService } from './user.service';

@Injectable()
export class UserFacade {
    constructor(private readonly userService: UserService) {}

    async getUsers() {
        return await this.userService.getUsers();
    }

    async getUserById(id: number) {
        return await this.userService.getUserById(id);
    }

    async createUser(input: CreateUserDto) {
        return await this.userService.createUser(input);
    }

    async updateUser(id: number, input: UpadteUserDto) {
        const user = await this.userService.getUserById(id);
        if (!user) {
            throw new HttpException('User not found.', HttpStatus.EXPECTATION_FAILED);
        }
        return await this.userService.updateUser(user, input);
    }
}
