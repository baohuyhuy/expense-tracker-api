/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable('users', (table) => {
    table.increments('id').primary();
    table.text('email').notNullable().unique();
    table.text('first_name').notNullable();
    table.text('last_name').notNullable();
    table.text('hash_password').notNullable();
    table.text('avatar').nullable();
    table.text('role').notNullable().defaultTo('user');
    table.timestamps(true, true);
  });
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTable('users');
}
