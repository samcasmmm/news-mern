import jwt from 'jsonwebtoken';

const generateToken = (res, userId) => {
  return jwt.sign({ userId }, process.env.SECRET_KEY, {
    expiresIn: '2d',
  });
};

export default generateToken;
