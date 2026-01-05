import { z } from 'zod';

export const registerSchema = z.object({
  body: z.object({
    email: z.email('Invalid email address').toLowerCase().trim(),
    password: z
      .string()
      .min(8, 'Password must be at least 8 characters long')
      .trim(),
    first_name: z.string().min(1, 'First name is required').trim(),
    last_name: z.string().min(1, 'Last name is required').trim(),
    avatar: z.url('Invalid avatar URL').trim(),
  }),
});
