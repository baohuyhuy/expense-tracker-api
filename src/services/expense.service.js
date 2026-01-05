import { Expense } from '#models/expense.model.js';

export const createExpense = async ({
  title,
  description,
  amount,
  category,
  date,
  user_id,
}) => {
  const expense = await Expense.create({
    title,
    description,
    amount,
    category,
    date,
    user_id,
  });
  return expense;
};

export const getAllExpenses = async (id, page, limit) => {
  const [expenses, total] = await Promise.all([
    Expense.findAll({ user_id: id })
      .offset((page - 1) * limit)
      .limit(limit),
    Expense.count({ user_id: id }).then((result) => Number(result[0].total)),
  ]);
  return { expenses, total };
};
