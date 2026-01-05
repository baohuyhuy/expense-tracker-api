import db from '#config/db.js';

export const Expense = {
  create: (expense) =>
    db('expenses').insert(expense, [
      'id',
      'title',
      'description',
      'amount',
      'category',
      'date',
      'user_id',
    ]),
  findAll: (filter) => db('expenses').where(filter).orderBy('date', 'desc'),
  findOne: (filter) => db('expenses').where(filter).first(),
  count: (filter) => db('expenses').where(filter).count('id as total'),
};
