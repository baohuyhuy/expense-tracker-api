import express, { json, urlencoded } from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import cors from 'cors';
import { AppError, errorHandler } from '#middlewares/error.js';

import indexRouter from '#routes/index.route.js';
import authRouter from '#routes/auth.route.js';

const app = express();

app.use(cors());
app.use(logger('dev'));
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/', indexRouter);
app.use('/auth', authRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(new AppError('Route not found', 404));
});

// error handler
app.use(errorHandler);

export default app;
