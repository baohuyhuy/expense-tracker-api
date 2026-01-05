import { Router } from 'express';
import * as authController from '#controllers/auth.controller.js';
import { validate } from '#middlewares/validator.js';
import { registerSchema, loginSchema } from '#validations/auth.schema.js';
import { authenticateToken } from '#middlewares/auth.js';

const router = Router();

router.post('/register', validate(registerSchema), authController.register);
router.post('/login', validate(loginSchema), authController.login);
router.post('/logout', authenticateToken, authController.logout);

export default router;
