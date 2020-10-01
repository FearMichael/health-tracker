import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from "@nestjs/typeorm";
import { Connection } from 'typeorm';
import { UserController } from './User/user.controller';
import { UserService } from './User/user.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "mysql",
      host: "localhost",
      port: 3306,
      username: "root",
      password: "root",
      database: "test",
      entities: ["Entity/*.js"],
      migrations: ["migration/*.js"],
      cli: {
        migrationsDir: "migration"
      },
      synchronize: true
    })
  ],
  controllers: [AppController, UserController],
  providers: [AppService, UserService],
})
export class AppModule {
  constructor(private connection: Connection) { }
}
