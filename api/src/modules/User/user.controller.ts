import { Controller, Get, Param, Post, Put, Req } from '@nestjs/common';
import { ApiProperty, ApiResponse, ApiTags } from '@nestjs/swagger';
import { User } from 'src/entity/User.entity';
import { getManager } from 'typeorm';
import { Request } from 'express';
import { UserService } from './user.service';
import { IUserDetail } from "./user.interfaces";
import { UserDetail } from './user.classes';

@ApiTags("User")
@Controller('user')
export class UserController {

    constructor(
        private userSerice: UserService
    ) { }

    @ApiProperty()
    email: string;
    @Post("/")
    async createUser(@Req() req: Request) {
        console.log(req.body);
        return await this.userSerice.create(req.body);
    }
    /**
     * 
     */
    @Get("/:id")
    async getUser(@Param() params) {
        const manager = getManager();
        const userRepo = manager.getRepository(User);
        return userRepo.findOneOrFail(params.id);
    }
    /**
     * 
     * @param params 
     */
    @Put("/:id")
    async updateUser(@Param() params, @Req() req: Request) {
        const userRepo = getManager().getRepository(User);
        userRepo.update(req.body, { id: params.id });
        console.log(req.body);
        return userRepo.findOneOrFail(params.id);
    }

    @Get("/:id/detail")
    @ApiResponse({ status: 200, description: "Full detail of the user", type: UserDetail })
    @ApiResponse({ status: 403, description: "Unauthorized access" })
    async updateUserDetail(@Param() params, @Req() req: Request) {
        return this.userSerice.userDetail(params.id);
    }


}
