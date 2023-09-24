import jwt from 'jsonwebtoken';
import asyncHandler from 'express-async-handler';
import User from './../models/userSchema';

const protect = asyncHandler(async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startswith('Bearer')
  ) {
    try {
      token = req.headers.authorization.split(' ')[1];
      const decoded = jwt.verify(token, process.env.SECRET_KEY);
      req.user = await User.findById(decoded.id).select('-password');
      next();
    } catch (error) {
      console.error(error);
      res.status(401);
      throw new Error('Not Authorized, Token Failed');
    }
  }
  if (!token) {
    res.status(401);
    throw new Error('Not Authorized, No Token');
  }
});

const admin = (req, res, next) => {
  if (req.user && req.user.userType === 'admin') {
    next();
  } else {
    res.status(401);
    throw new Error('Not authorized as an Admin');
  }
};
export { protect, admin };
