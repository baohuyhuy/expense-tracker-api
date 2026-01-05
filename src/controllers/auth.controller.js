import * as AuthService from '#services/auth.service.js';

export const register = async (req, res) => {
  const { email, password, first_name, last_name, avatar } = req.body;

  const user = await AuthService.register({
    email,
    password,
    first_name,
    last_name,
    avatar,
  });

  res.status(201).json({
    status: 'success',
    message: 'User registered successfully',
    data: user,
  });
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  const { token, user } = await AuthService.login({ email, password });

  res.status(200).json({
    status: 'success',
    message: 'User logged in successfully',
    data: {
      token,
      user,
    },
  });
};
