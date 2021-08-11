import * as dotenv from 'dotenv';
dotenv.config();

export default {
  client: 'pg',
  connection: {
    host: process.env.SQL_HOST || 'localhost',
    port: +process.env.SQL_PORT || 5432,
    user: process.env.SQL_USERNAME || 'postgres',
    password: process.env.SQL_PASSWORD || 'postgres',
    database: process.env.SQL_DATABASE || 'postgres',
  },
  pool: {
    min: 1,
    max: 10,
  },
  migrations: {
    tableName: 'migrations',
  },
  seeds: {
    directory: './seeds/dev',
  },
};
