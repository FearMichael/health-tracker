import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule, TypeOrmModuleOptions } from "@nestjs/typeorm";
import { Connection } from 'typeorm';
import { UserController } from './modules/User/user.controller';
import { UserService } from './modules/User/user.service';
import { AuthController } from './modules/Auth/auth.controller';
import { AuthService } from './modules/Auth/auth.service';
import { config } from "dotenv";
import { resolve } from "path";
config({ path: resolve(__dirname, "../../.env") });

@Module({
  imports: [
    TypeOrmModule.forRoot({
      "type": "mysql",
      "host": process.env.DB_HOST,
      "port": 3306,
      "username": process.env.DB_USERNAME,
      "password": process.env.DB_PASSWORD,
      "database": process.env.DB_NAME,
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
