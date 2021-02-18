import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PersonalInformation } from 'src/entities';
import { User } from 'src/entities/User.entity';
import { getConnection, Repository } from 'typeorm';
import { ILoginPayload, IUserDetail } from './user.interfaces';

@Injectable()
export class UserService {

    private connection = getConnection();

    constructor(
        @InjectRepository(User) private userRepo: Repository<User>
    ) { }

    public list() {
        return this.userRepo.findAndCount();
    }

    public create(user: Partial<IUserDetail>) {
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

    public async findOrCreate({ id, email }: ILoginPayload) {
        let user: User;
        user = await this.userRepo.findOne(id);
        if (!user) {
            user = this.userRepo.create({ id, email });
            this.userRepo.save(user);
        }
        // if (!user.address) user.address = {};
        return user;
    }

    public getById(id: string) {
        return this.userRepo.findOneOrFail(id);
    }
    public async update(id: string, { personalInformation, address, ...input }: Partial<User>) {
        return await this.userRepo.save({ personalInformation, address, ...input });
    }
    public delete(id: string) {
        return this.userRepo.delete(id);
    }
    // TODO type User and PersonalInformation
    public userDetail(id: string): Promise<IUserDetail> {
        return this.userRepo.findOneOrFail(id, { relations: ["personalInformation", "address"] }).then((val) => {
            return val;
        });
    }


}
