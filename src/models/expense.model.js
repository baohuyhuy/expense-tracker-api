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
};
