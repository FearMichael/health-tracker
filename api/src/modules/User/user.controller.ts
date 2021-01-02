import { Controller, Post } from '@nestjs/common';
import { ApiProperty, ApiTags } from '@nestjs/swagger';
import { User } from 'src/entity/User.entity';
import { getManager } from 'typeorm';


@ApiTags("User")
@Controller('user')
export class UserController {
    @ApiProperty()
    email: string;
    @Post("/")
    async createUser() {
        const manager = getManager()
        const user = await manager.create(User, {
            firstName: "",
            lastName: "",

        })
        // TODO remove the log
        console.log(user);
        // return userRepo.create(user);
    }


}
