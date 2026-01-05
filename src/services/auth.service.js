import { User } from '#models/user.model.js';
import { AppError } from '#middlewares/error.js';
import { hashPassword, verifyPassword } from '#utils/password.js';
import { generateToken } from '#utils/token.js';

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

export const login = async ({ email, password }) => {
  const user = await User.findOne({ email }).select(
    'id',
    'hash_password',
    'role'
  );
  if (!user || !(await verifyPassword(password, user.hash_password))) {
    throw new AppError('Invalid email or password', 401);
  }
  const token = generateToken({ sub: user.id, role: user.role });
  return { token, user: { id: user.id, role: user.role } };
};
