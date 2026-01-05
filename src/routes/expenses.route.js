import { Router } from 'express';
import * as expenseController from '#controllers/expense.controller.js';
import { authenticateToken } from '#middlewares/auth.js';
import { validate } from '#middlewares/validator.js';
import {
  createExpenseSchema,
  getAllExpensesSchema,
  getExpenseByIdSchema,
  updateExpenseSchema,
} from '#validations/expense.schema.js';

const router = Router();

router.post(
  '/',
  validate(createExpenseSchema),
  authenticateToken,
  expenseController.createExpense
);
router.get(
  '/',
  validate(getAllExpensesSchema),
  authenticateToken,
  expenseController.getAllExpenses
);
router.get(
  '/:id',
  validate(getExpenseByIdSchema),
  authenticateToken,
  expenseController.getExpenseById
);
router.patch(
  '/:id',
  validate(updateExpenseSchema),
  authenticateToken,
  expenseController.updateExpense
);
export default router;
