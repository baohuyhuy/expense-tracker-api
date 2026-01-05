import { z } from 'zod';

export const createExpenseSchema = z.object({
  body: z.object({
    title: z.string().trim().min(1, 'Title is required'),
    description: z.string().trim().optional(),
    amount: z.coerce.number().positive('Amount must be greater than 0'),
    category: z.string().trim().optional(),
    date: z.coerce.date().optional(),
  }),
});

export const getAllExpensesSchema = z.object({
  query: z.object({
    page: z.coerce.number().optional().default(1),
    limit: z.coerce.number().optional().default(10),
    start_date: z.string().optional(),
    end_date: z.string().optional(),
  }),
});

export const getExpenseByIdSchema = z.object({
  params: z.object({
    id: z.coerce.number().positive('Id must be a positive number'),
  }),
});
