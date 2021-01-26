import { AfterLoad, Column, Entity } from "typeorm";
import differenceInCalendarYears from 'date-fns/differenceInCalendarYears'
// import format from "date-fns/format"
// import Date from 'date-fns/'
import { BaseEntity } from "./BaseEntity.entity";


@Entity()
export class PersonalInformation extends BaseEntity {

    @Column({ type: "datetime", default: null })
    birthdate: Date;

    @Column({ type: "int", default: null })
    age: number | null;

    @Column({ type: "varchar", default: null })
    alternateEmail: string;

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
