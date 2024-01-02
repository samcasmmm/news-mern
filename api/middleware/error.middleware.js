/**
 * Express error middleware.
 *
 * @param error The error object.
 * @param req The request object.
 * @param res The response object.
 * @param next The next middleware function.
 */

const notFound = (req, res, next) => {
  const error = new Error(`Not found - ${req.originalUrl}`);
  res.status(404);
  next(error);
};

const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode).json({
    status: statusCode,
    message: err.message,
    meta: res.meta || null,
    data: null,
    stack: process.env.NODE_ENV === 'production' ? null : err.stack,
  });
};

export { notFound, errorHandler };
