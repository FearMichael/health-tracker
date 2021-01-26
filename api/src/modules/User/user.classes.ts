import { PersonalInformation, User } from "src/entity"
import { Address } from "src/entity/Address.entity";

export class UserDetail extends User {
    personalInformation: PersonalInformation;
    address: Address;
}