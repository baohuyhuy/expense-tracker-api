import { Router } from 'express';
import * as authController from '#controllers/auth.controller.js';
import { validate } from '#middlewares/validator.js';
import { registerSchema } from '#validations/auth.schema.js';

const router = Router();

router.post('/register', validate(registerSchema), authController.register);

export default router;
