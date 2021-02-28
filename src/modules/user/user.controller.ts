import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entity/user.entity';
import { UserFacade } from './user.facade';

@ApiTags('User')
@Controller('v1/users')
@ApiBearerAuth()
export class UserController {
    constructor(private readonly userFacade: UserFacade) {}

    @Get()
    @ApiOkResponse({
        description: "Users retrived successfully.",
        type: [User]
    })
    async getUsers() {
        const users = await this.userFacade.getUsers();
        return { data: users, message: 'Users retrived successfully.' };
    }

    @Get(':id')
    async getUserById(@Param('id') id: number) {
        const user = await this.userFacade.getUserById(id);
        return { data: user, message: 'User retrived successfully.' };
    }

    @Post()
    async createUser(@Body() input: CreateUserDto) {
        const user = await this.userFacade.createUser(input);
        return { data: user, message: 'User created successfully.' };
    }

    @Put()
    async updateUser(@Param('id') id: number, @Body() input: CreateUserDto) {
        const user = await this.userFacade.updateUser(id, input);
        return { data: user, message: 'User updated successfully.' };
    }
}
