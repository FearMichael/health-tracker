import { Controller, Get, Post, Request } from '@nestjs/common';
import { ApiBasicAuth, ApiBody, ApiOperation, ApiProperty, ApiResponse, ApiTags } from '@nestjs/swagger';
import { RequestBodyObject } from '@nestjs/swagger/dist/interfaces/open-api-spec.interface';
import { User } from 'src/entity/User.entity';
import { getManager } from 'typeorm';
import { LoginBodyDto } from './auth.dto';

@ApiTags("Auth")
@ApiBasicAuth("auth")
@Controller('auth')
export class AuthController {

    @Get("token")
    getAuth() {

    }

    @ApiBody({ type: LoginBodyDto })
    @ApiResponse({ status: 401, description: "Incorrect username or password" })
    @ApiResponse({ status: 200, description: "Granted" })
    @Post("login")
    async login(@Request() req: LoginBodyDto): Promise<User | Error> {

        const manager = getManager();

        const user = await manager.findOneOrFail(User)

        if (!user) {
            return Error("Unauthorized");
        }
        return user;
    }

}
