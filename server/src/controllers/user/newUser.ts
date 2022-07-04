import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

import { BadRequestError } from '../../errors/badRequestError';
import { User } from '../../models/userModel';

export const newUser = async (req: Request, res: Response, next: NextFunction) => {
  const { email, password, fullName } = req.body;

  const existUser = await User.findOne({ email });

  if (existUser) {
    return next(new BadRequestError('User email already is used!'));
  }

  const user = User.build({ email, password, fullName });
  await user.save();

  const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET!, { expiresIn: process.env.JWT_SECRET_EXPIRY! });

  res.status(201).json({ token, user });
};
