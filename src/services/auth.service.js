import { User } from '#models/user.model.js';
import { AppError } from '#middlewares/error.js';
import { hashPassword } from '#utils/password.js';

export const register = async ({
  email,
  password,
  first_name,
  last_name,
  avatar,
}) => {
  const user = await User.findOne({ email });
  if (user) {
    throw new AppError('Email already exists', 400);
  }

  const hashedPassword = await hashPassword(password);
  const [newUser] = await User.create({
    email,
    hash_password: hashedPassword,
    first_name,
    last_name,
    avatar,
  });
  return newUser;
};
