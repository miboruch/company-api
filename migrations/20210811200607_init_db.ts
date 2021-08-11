import * as Knex from 'knex';
import * as dotenv from 'dotenv';
dotenv.config();

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('users', (table) => {
    table.increments('id').primary();
    table.text('name').notNullable();
    table.text('surname').notNullable();
    table.text('email').notNullable();
    table.text('country').notNullable();
    table.text('address').notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.raw(`DROP DATABASE ${process.env.SQL_DBNAME}`);
}
