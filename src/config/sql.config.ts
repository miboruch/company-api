export default {
  client: 'pg',
  connection: {
    host: process.env.SQL_HOST || 'localhost',
    user: process.env.SQL_USERNAME || 'postgres',
    password: process.env.SQL_PASSWORD || 'postgres',
    database: process.env.SQL_DATABASE || 'postgres',
  },
  migrations: {
    tableName: 'migrations',
  },
};
