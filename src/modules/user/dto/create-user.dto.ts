import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class CreateUserDto {
    @IsNotEmpty({ message: 'First name can not be empty.' })
    @ApiProperty({ example: 'Rutuparna' })
    firstName: string;

    @IsNotEmpty({ message: 'Last name can not be empty' })
    @ApiProperty({ example: 'Rout' })
    lastName: string;

    @IsEmail()
    @ApiProperty({ example: 'rutuparna.rout@outlook.com' })
    email: string;

    @ApiProperty({ example: 23 })
    age: number;

    @ApiProperty({ example: '9853461442' })
    phoneNumber: string;

    @ApiProperty({ example: 'User@123' })
    password: string;
}
