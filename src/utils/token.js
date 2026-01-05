import jwt from 'jsonwebtoken';
import { AppError } from '#middlewares/error.js';

export const generateToken = (payload) => {
  return jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: '15m',
  });
};

export const verifyToken = (token) => {
  return jwt.verify(token, process.env.JWT_SECRET, (err, payload) => {
    if (err) {
      throw new AppError('Invalid or expired token', 401);
    }
    return payload;
  });
};
