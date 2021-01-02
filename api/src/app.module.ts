import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule, TypeOrmModuleOptions } from "@nestjs/typeorm";
import { Connection } from 'typeorm';
import { UserController } from './modules/User/user.controller';
import { UserService } from './modules/User/user.service';
import { AuthController } from './modules/Auth/auth.controller';
import { AuthService } from './modules/Auth/auth.service';
// import { ServeFrontend } from "./app.middleware";
import { ServeStaticModule } from "@nestjs/serve-static"
import { join } from "path";
import { ChartsController } from './modules/Charts/charts.controller';
import { ChartsService } from './modules/Charts/charts.service';

import { ormConfig } from "./config/ormconfig";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      ...ormConfig as TypeOrmModuleOptions
    }),
    ServeStaticModule.forRoot({
      rootPath: join(process.cwd(), '../client/dist'),
      exclude: ['/api*'],
    }),
  ],
  controllers: [UserController, AuthController, ChartsController],
  providers: [AppService, UserService, AuthService, ChartsService],
})
export class AppModule {
  constructor(private connection: Connection) { }

}
