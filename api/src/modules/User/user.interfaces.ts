import { PersonalInformation, User } from "src/entity";
import { Address } from "src/entity/Address.entity";

export interface IUser {
    id: string;
    createdAt: string;
    updatedAt: string;
}

export interface IUserDetail extends User {
    personalInformation: PersonalInformation
    address: Address
}