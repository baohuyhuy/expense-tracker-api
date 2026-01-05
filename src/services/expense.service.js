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

export const getAllExpenses = async (id) => {
  const expenses = await Expense.findAll({ user_id: id });
  return expenses;
};
