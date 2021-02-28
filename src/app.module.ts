import { Module } from '@nestjs/common';
import { SharedModule } from './modules/shared/shared.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { UserAddress } from './modules/user/entity/user-address.entity';
import { User } from './modules/user/entity/user.entity';
import { UserModule } from './modules/user/user.module';

@Module({
    imports: [
        ConfigModule.forRoot({
            envFilePath: 'dev.env',
            isGlobal: true
        }),
        TypeOrmModule.forRoot({
            host: process.env.DB_HOST,
            type: 'mysql',
            port: 3306,
            username: process.env.DB_USERNAME,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
            entities: [User, UserAddress],
            synchronize: true
        }),
        UserModule,
        SharedModule
    ]
})
export class AppModule {}
