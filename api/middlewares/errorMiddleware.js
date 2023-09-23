export const notFoundMiddleware = (req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404);
  if (process.env.NODE_ENV !== 'production') {
    res.json({
      Error: error.name,
      status: res.statusCode,
      Message: error.message,
    });
    //  console.log(error.name);
  } else {
    next(error);
    res.json({
      Error: error.name,
      status: res.statusCode,
      Message: error.message,
      Stack: error.stack,
    });
  }
};
