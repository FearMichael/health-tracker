import { AfterLoad, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import differenceInCalendarYears from 'date-fns/differenceInCalendarYears'
import format from "date-fns/format"
// import Date from 'date-fns/'

@Entity()
export class PersonalInformation {

    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column({ type: "datetime" })
    birthdate: Date;

    // @Column({ type: "number" })
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
