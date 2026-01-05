import db from '#config/db.js';

export const User = {
  findOne: (filter) => db('users').where(filter).first(),
  findAll: () =>
    db('users')
      .select('id', 'email', 'first_name', 'last_name', 'avatar')
      .orderBy('id'),
  create: (user) =>
    db('users').insert(user, [
      'id',
      'email',
      'first_name',
      'last_name',
      'role',
    ]),
  count: () => db('users').count('id as total'),
};
