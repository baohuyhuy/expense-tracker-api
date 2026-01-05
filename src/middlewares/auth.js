import { AppError } from '#middlewares/error.js';
import { verifyToken } from '#utils/token.js';

export const authenticateToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(' ')[1];
  if (!token) {
    throw new AppError('Token missing', 401);
  }

  const payload = verifyToken(token);

  req.user = payload;

  next();
};
