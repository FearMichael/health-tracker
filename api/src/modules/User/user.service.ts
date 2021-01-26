import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PersonalInformation } from 'src/entity';
import { User } from 'src/entity/User.entity';
import { getConnection, Repository } from 'typeorm';
import { IUserDetail } from './user.interfaces';

@Injectable()
export class UserService {

    private connection = getConnection();

    constructor(
        @InjectRepository(User) private userRepo: Repository<User>
    ) { }

    create(user: Partial<IUserDetail>) {
        const added = this.userRepo.create(user);
        added.personalInformation = user.personalInformation;
        added.address = user.address;
        return this.userRepo.save(added);

        // this.connection
        //     .createQueryBuilder()
        //     .insert()
        //     .into(User)
        //     .values(user)
        //     .relation(User, "personalInformation")
        //     .of(PersonalInformation)
        //     .set(user.personalInformation)

    }
    read(id: string) {
        return this.userRepo.findOneOrFail(id);
    }
    update(id: string, user: Partial<User>) {
        return this.userRepo.update(id, user);
    }
    delete(id: string) {
        return this.userRepo.delete(id);
    }
    // TODO type User and PersonalInformation
    userDetail(id: string): Promise<IUserDetail> {
        return this.userRepo.findOneOrFail(id, { relations: ["personalInformation", "address"] });
    }


}
