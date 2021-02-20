import { PersonalInformation, User } from "src/entities"
import { Address } from "src/entities/Address.entity";

export class UserDetail extends User {
    personalInformation: PersonalInformation;
    address: Address;
}