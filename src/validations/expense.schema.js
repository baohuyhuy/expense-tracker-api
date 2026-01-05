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
