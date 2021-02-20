import { Controller, Get, HttpException, HttpStatus, Param, Post, Put, Req } from '@nestjs/common';
import { ApiBody, ApiProperty, ApiResponse, ApiTags } from '@nestjs/swagger';
import { User } from 'src/entities/User.entity';
import { Request } from 'express';
import { UserService } from './user.service';
import { IUserDetail } from "./user.interfaces";
import { UserDetail } from './user.classes';

@ApiTags("User")
@Controller('user')
export class UserController {

    constructor(
        private userService: UserService
    ) { }

    @ApiBody({ type: User })
    @Post("/")
    async createUser(@Req() req: Request) {
        console.log(req.body);
        return await this.userService.create(req.body);
    }
    @Get("/")
    @ApiResponse({ status: 200, description: "Gets a list of users", type: [User] })
    @ApiResponse({ status: 403, description: "Unauthorized access" })
    async getUsers(@Req() req: Request) {
        return this.userService.list();
    }
    @Post("/auth")
    @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: "Invalid request provided" })
    @ApiResponse({ status: HttpStatus.OK, description: "User returned" })
    async getOrCreate(@Req() req: Request) {
        const { id, email } = req.body;
        if (!id) throw new HttpException("No user id provided!", HttpStatus.BAD_REQUEST);
        return this.userService.findOrCreate({ id, email });
    }
    /**
     * 
     */
    @Get("/:id")
    @ApiResponse({ status: 200, description: "Gets a user's basic information", type: User })
    @ApiResponse({ status: 403, description: "Unauthorized access" })
    async getUser(@Param() params) {
        return this.userService.getById(params.id);
    }
    /**
     * 
     * @param params 
     */
    @Put("/:id")
    @ApiResponse({ status: 200, description: "Updates a user", type: User })
    @ApiResponse({ status: 403, description: "Unauthorized access" })
    async updateUser(@Param() params, @Req() req: Request) {
        return this.userService.update(params.id, req.body);
    }

    @Get("/:id/detail")
    @ApiResponse({ status: 200, description: "Full detail of the user", type: UserDetail })
    @ApiResponse({ status: 403, description: "Unauthorized access" })
    async updateUserDetail(@Param() params, @Req() req: Request) {
        return this.userService.userDetail(params.id);
    }


}
