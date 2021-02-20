import { PersonalInformation, User } from "src/entities";
import { Address } from "src/entities/Address.entity";

export interface IUser {
    id: string;
    createdAt: string;
    updatedAt: string;
}

export interface IUserDetail extends User {
    personalInformation: PersonalInformation
    address: Address
}

export interface ILoginPayload {
    id: string;
    email: string;
}