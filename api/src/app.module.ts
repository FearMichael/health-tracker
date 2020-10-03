import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule, TypeOrmModuleOptions } from "@nestjs/typeorm";
import { Connection } from 'typeorm';
import { UserController } from './modules/User/user.controller';
import { UserService } from './modules/User/user.service';
import { AuthController } from './modules/Auth/auth.controller';
import { AuthService } from './modules/Auth/auth.service';
// import ormconfig from "../ormconfig.json";
// console.log(ormconfig)
@Module({
  imports: [
    TypeOrmModule.forRoot({
      "type": "mysql",
      "host": "localhost",
      "port": 3306,
      "username": "root",
      password: "",
      "database": "test",
      "entities": [
        "dist/**/*.entity{.ts,.js}"
      ],
      "migrations": [
        "migration/*.ts"
      ],
      "cli": {
        "migrationsDir": "migration"
      },
      "synchronize": false,
      "migrationsRun": true
    })

  ],
  controllers: [AppController, UserController, AuthController],
  providers: [AppService, UserService, AuthService],
})
export class AppModule {
  constructor(private connection: Connection) { }
}
