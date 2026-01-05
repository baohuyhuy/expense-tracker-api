/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable('expenses', (table) => {
    table.increments('id').primary();
    table.text('title').notNullable();
    table.text('description').nullable();
    table.decimal('amount', 10, 2).notNullable();
    table.text('category').nullable();
    table.date('date').notNullable().defaultTo(knex.fn.now());
    table.integer('user_id').references('users.id').notNullable();
    table.timestamps(true, true);
  });
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTable('expenses');
}
