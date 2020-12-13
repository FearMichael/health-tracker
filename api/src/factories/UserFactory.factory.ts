import { getRepository } from "typeorm";
import { LogEntry } from "../Entity/LogEntry.entity";

const randomString = () => {
    const letters = ["abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"];
    let string = "";
    for (let i = 0; i <= 30; i++) {
        string += Math.random()
    }
}

export const UserFactory = {
    build: (attrs: Partial<LogEntry> = {}) => {
        const logAttrs: Partial<LogEntry> = {

        }
    },

    seed: async () => {
        const repo = getRepository(LogEntry);

        for (let i = 1; i <= 100; i++) {
            const date = new Date();
            repo.create({
                date: date.toISOString(),
                notes: "",
                rating: Math.ceil(Math.random() * 10)
            })
        }

    }

    // create: async (attrs: Partial<LogEntry>): Promise<LogEntry> => {
    //     return getRepository(LogEntry).create(attrs);
    // }
}