import { ConnectionOptions } from "typeorm";
import * as dotenv from "dotenv";
import { resolve } from "path";
dotenv.config({ path: resolve(__dirname, "../../../.env") });

export const ormConfig: ConnectionOptions = {
    "type": "mysql",
    "host": process.env.DB_HOST,
    "port": parseInt(process.env.DB_PORT, 10),
    "username": process.env.DB_USERNAME,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_DATABASE,
    "entities": [
        "dist/**/*.entity{.ts,.js}"
    ],
    "migrations": [
        "dist/migrations/*{.ts,.js}"
    ],
    "migrationsRun": true,
    "logging": true,
}