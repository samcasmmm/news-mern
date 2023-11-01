import asyncHandler from 'express-async-handler';
import generateToken from '../utils/generateToken.js';
import User from './../models/userSchema.js';

/**
 * Authenticate a user and generate an access token.
 * @route   POST /api/users/auth
 * @access  Public
 */
const authenticateUser = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (user) {
    const isMatched = await user.matchPassword(password);

    if (isMatched) {
      user.password = undefined;
      const { _password: userPassword, ...userWithoutPassword } = user._doc;
      const token = generateToken(res, user._id);

      return res.status(200).json({
        message: 'User Logged In',
        status: 'success',
        user: userWithoutPassword,
        token: token,
      });
    }
  }

  return res.status(401).json({ message: 'Invalid Credentials' });
});

/**
 * Register a new user.
 * @route   POST /api/users
 * @access  Public
 */
const registerUser = asyncHandler(async (req, res, next) => {
  const { username, email, password } = req.body;
  const userExists = await User.findOne({ $or: [{ username }, { email }] });

  if (userExists) {
    return next({
      message: 'User already exists',
      status: 'Bad Request',
    });
  }

  if (password.length < 5) {
    return res.status(400).json({
      message: 'Password must be at least 5 characters long',
      status: 'Bad Request',
    });
  }

  const user = await User.create({ username, email, password });
  const { password: userPassword, ...newUser } = user._doc;

  if (user) {
    const token = generateToken(res, user._id);
    return res.status(201).json({
      message: 'A new user created',
      status: 'success',
      user: newUser,
      token: token,
    });
  }
});

/**
 * Logout a user by clearing the JWT cookie.
 * @route   POST /api/users/logout
 * @access  Public
 */
const logoutUser = asyncHandler(async (req, res) => {
  res.cookie('jwt', '', {
    httpOnly: true,
    expires: new Date(0),
  });
  res.status(200).json({ message: 'User Logout' });
});

/**
 * Get the user's profile.
 * @route   GET /api/users/profile
 * @access  Private
 */
const getUserProfile = asyncHandler(async (req, res) => {
  const user = {
    _id: req.user._id,
    username: req.user.username,
    email: req.user.email,
  };

  res.status(200).json({ message: 'User Profile', status: 'success', user });
});

/**
 * Update the user's profile.
 * @route   PUT /api/users/profile
 * @access  Private
 */
const updateUserProfile = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.user._id);

  if (user) {
    user.username = req.body.username || user.username;
    user.email = req.body.email || user.email;

    if (req.body.password) {
      user.password = req.body.password;
    }

    const updatedUser = await user.save();
    updatedUser.password = undefined;

    return res.status(200).json({
      message: 'User profile updated',
      status: 'success',
      user: updatedUser,
    });
  } else {
    return res.status(404).json({
      message: 'User not found',
      status: 404,
    });
  }
});

/**
 * Get a list of all users (excluding the password field).
 * @route   GET /api/users
 * @access  Private
 */
const getAllUsers = asyncHandler(async (req, res, next) => {
  try {
    const users = await User.find().select('-password');

    return res.status(200).json({
      message: 'Users fetched successfully',
      status: 'success',
      users: users,
    });
  } catch (error) {
    return res.status(500).json({
      message: 'An error occurred while fetching users',
      status: 'error',
    });
  }
});

export {
  authenticateUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  getAllUsers,
};
