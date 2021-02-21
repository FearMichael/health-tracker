import { logger } from "src/config/cli-ormconfig";
import { Connection, getConnection, getRepository } from "typeorm"
import { Factory, Seeder } from "typeorm-seeding";
import Faker from "faker";
// This needs to be a relative path for the cli to correctly interprate, can't be src/....
import { LogQuestion } from "../../entities/LogQuestion.entity";


const questions = [
    "Overall rate how you felt today",
    "Rate how your condition affected today"
];

export default class CreateQuestions implements Seeder {

    public async run(factory: Factory, connection: Connection): Promise<void> {
        const create = questions.map((q) => ({ text: q }));
        await getConnection()
            .createQueryBuilder()
            .insert()
            .into(LogQuestion)
            .values(create)
            .execute();
    }

}