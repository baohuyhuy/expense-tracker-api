import { Expense } from '#models/expense.model.js';
import db from '#config/db.js';

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

export const getAllExpenses = async (id, page, limit, start_date, end_date) => {
  // Build base query with user_id filter
  let expensesQuery = Expense.findAll({ user_id: id });
  let countQuery = db('expenses').where({ user_id: id });

  console.log(start_date, end_date);
  // Add date filtering if start_date or end_date is provided
  if (start_date || end_date) {
    if (start_date && end_date) {
      // Both dates provided - use whereBetween
      expensesQuery = expensesQuery.whereBetween('date', [
        start_date,
        end_date,
      ]);
      countQuery = countQuery.whereBetween('date', [start_date, end_date]);
    } else if (start_date) {
      // Only start_date provided - filter from start_date onwards
      expensesQuery = expensesQuery.where('date', '>=', start_date);
      countQuery = countQuery.where('date', '>=', start_date);
    } else if (end_date) {
      // Only end_date provided - filter up to end_date
      expensesQuery = expensesQuery.where('date', '<=', end_date);
      countQuery = countQuery.where('date', '<=', end_date);
    }
  }

  const [expenses, total] = await Promise.all([
    expensesQuery.offset((page - 1) * limit).limit(limit),
    countQuery.count('id as total').then((result) => Number(result[0].total)),
  ]);
  return { expenses, total };
};
