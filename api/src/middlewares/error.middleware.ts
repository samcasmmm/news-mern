import { Request, Response, NextFunction } from 'express';
import HttpException from '../utils/exceptions/http.exception.js';

/**
 * Express error middleware.
 *
 * @param error The error object.
 * @param req The request object.
 * @param res The response object.
 * @param next The next middleware function.
 */

function errorMiddleware(
  error: HttpException,
  req: Request,
  res: Response,
  next: NextFunction
): void {
  const status = error.status || 500;
  const message = error.message || 'Something went wrong';

  // Log the error to the console.
  console.error(error);

  // Send the error response to the client.
  res.status(status).send({
    status,
    message,
  });
}

export default errorMiddleware;
