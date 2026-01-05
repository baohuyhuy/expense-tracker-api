import * as ExpenseService from '#services/expense.service.js';

export const createExpense = async (req, res) => {
  const { title, description, amount, category, date } = req.body;
  const { sub: user_id } = req.user;

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
  const { page, limit, start_date, end_date } = req.locals.query;
  const { expenses, total } = await ExpenseService.getAllExpenses(
    id,
    page,
    limit,
    start_date,
    end_date
  );

  const totalPages = Math.ceil(total / limit);
  res.status(200).json({
    status: 'success',
    message: 'Expenses fetched successfully',
    meta: {
      page,
      per_page: limit,
      total,
      total_pages: totalPages,
    },
    data: expenses,
  });
};

export const getExpenseById = async (req, res) => {
  const { id } = req.params;
  const { sub: userId } = req.user;
  const expense = await ExpenseService.getExpenseById(id, userId);
  res.status(200).json({
    status: 'success',
    message: 'Expense fetched successfully',
    data: expense,
  });
};

export const updateExpense = async (req, res) => {
  const { id } = req.params;
  const { sub: userId } = req.user;
  const updateData = req.body;
  const expense = await ExpenseService.updateExpense(id, userId, updateData);
  res.status(200).json({
    status: 'success',
    message: 'Expense updated successfully',
    data: expense,
  });
};

export const deleteExpense = async (req, res) => {
  const { id } = req.params;
  const { sub: userId } = req.user;
  await ExpenseService.deleteExpense(id, userId);
  res.status(204).send();
};
