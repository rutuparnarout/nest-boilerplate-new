import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class UpadteUserDto {
    @IsNotEmpty({ message: 'First name can not be empty.' })
    @ApiProperty({ example: 'Rutuparna' })
    firstName: string;

    @IsNotEmpty({ message: 'Last name can not be empty' })
    @ApiProperty({ example: 'Rout' })
    lastName: string;

    @ApiProperty({ example: 23 })
    age: number;

    @ApiProperty({ example: '9853461442' })
    phoneNumber: string;
}
