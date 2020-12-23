import { Controller, Post } from '@nestjs/common';
import { ApiProperty, ApiTags } from '@nestjs/swagger';
import { User } from 'src/entity/User.entity';
import { getManager, getRepository } from 'typeorm';
import { UserService } from './user.service';


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
        // return userRepo.create(user);
    }


}
