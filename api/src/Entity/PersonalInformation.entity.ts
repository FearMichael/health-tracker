import { AfterLoad, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import differenceInCalendarYears from 'date-fns/differenceInCalendarYears'
import format from "date-fns/format"
// import Date from 'date-fns/'
import { BaseEntity } from "./BaseEntity";


@Entity()
export class PersonalInformation extends BaseEntity {

    @Column({ type: "datetime" })
    birthdate: Date;

    @Column({ type: "int" })
    age: number;

    @AfterLoad()
    calculateAge() {
        if (this.birthdate) {
            // const now = new Date();
            this.age = differenceInCalendarYears(new Date(), this.birthdate)
        } else {
            this.age = null;
        }
    }

}
