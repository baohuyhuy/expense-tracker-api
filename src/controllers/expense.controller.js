import * as ExpenseService from '#services/expense.service.js';

export const createExpense = async (req, res) => {
  const { title, description, amount, category, date } = req.body;
  const { sub: user_id } = req.user;

  console.log(req.body);

  const expense = await ExpenseService.createExpense({
    title,
    description,
    amount,
    category,
    date,
    user_id,
  });

  res.status(201).json({
    status: 'success',
    message: 'Expense created successfully',
    data: expense,
  });
};

export const getAllExpenses = async (req, res) => {
  const { sub: id } = req.user;
  const expenses = await ExpenseService.getAllExpenses(id);

  res.status(200).json({
    status: 'success',
    message: 'Expenses fetched successfully',
    data: expenses,
  });
};
