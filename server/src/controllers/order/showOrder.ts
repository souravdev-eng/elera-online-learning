import { Request, Response, NextFunction } from 'express';
import { BadRequestError } from '../../errors/badRequestError';
import { Order } from '../../models/orderModel';
import { APIFeatures } from '../../utils/apiFetcher';

export const showOrder = async (req: Request, res: Response, next: NextFunction) => {
  const features = new APIFeatures(Order.find(), req.query).filter().sort().limitFields().paginate();
  const order = await features.query;

  if (!order) {
    return next(new BadRequestError('Order not found'));
  }

  res.status(200).json({ order });
};
