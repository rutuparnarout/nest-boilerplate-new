import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { UserFacade } from './user.facade';
import { UserRepo } from './user.repo';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserAddress } from './entity/user-address.entity';
import { User } from './entity/user.entity';

@Module({
    imports: [TypeOrmModule.forFeature([User, UserAddress])],
    providers: [UserService, UserFacade, UserRepo],
    controllers: [UserController]
})
export class UserModule {}
