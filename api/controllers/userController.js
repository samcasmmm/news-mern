import asyncHandler from 'express-async-handler';
import User from '../models/userSchema.js';
import generateToken from './../utils/generateToken.js';

// --  desc   -  Auth user/set token
// @ route    -  POST /api/users/auth
// ? access   -  Public
const authUser = asyncHandler(async (req, res, next) => {
  res.json({
    message: 'Auth User',
  });
});

// -- desc   -  Create a User
// @ route   -  POST /api/users/
// ? access  -  Public
const createUser = asyncHandler(async (req, res, next) => {
  const { name, email, userType, password } = req.body;

  const userExists = await User.findOne({ email: email });

  if (userExists) {
    return res.status(409).json({
      statusCode: 409,
      error: 'User Exists',
      message: 'User already exists. Please login.',
    });
  }

  if (password.length < 6) {
    return res.status(400).json({
      statusCode: 400,
      error: 'Invalid Password',
      message: 'Password must be at least 6 characters long.',
    });
  }

  const user = await User.create({ name, email, userType, password });

  const { password: _password, ...newUser } = user._doc;

  const token = generateToken(res, user._id);

  return res.status(201).json({
    message: 'User created successfully',
    success: true,
    user: newUser,
    token,
  });
});

// -- desc   -  Logout a User
// @ route   -  POST /api/users/logout
// ? access  -  Public
const logoutUser = asyncHandler(async (req, res, next) => {
  res.json({
    message: 'Logout User',
  });
});

// -- desc   -  Get User Profile
// @ route   -  GET /api/users/profile
// ? access -  Public
const userProfile = asyncHandler(async (req, res, next) => {
  res.json({
    message: 'User Profile',
  });
});

// -- desc   -  Update User
// @ route   -  PUT /api/users/profile
// ? access  -  Public
const updateUser = asyncHandler(async (req, res, next) => {
  res.json({
    message: 'Update Users',
  });
});

// -- desc   -  Get a User
// @ route   -  GET /api/users/:id
// ? access  -  Private
const getUser = asyncHandler(async (req, res, next) => {
  res.json({
    message: 'Get A Users',
  });
});

// -- desc   -  Get all User
// @ route   -  GET /api/users/
// ? access  -  Private
const getAllUser = asyncHandler(async (req, res, next) => {
  const { userType } = req.query;

  try {
    let query = {};

    if (userType === 'user') {
      query = { userType: 'user' };
    } else if (userType === 'admin') {
      query = { userType: 'admin' };
    } else if (userType === 'employee') {
      query = { userType: 'employee' };
    }

    const users = await User.find(query).select('-password');
    const totalUsers = users.length;

    res.status(200).json({
      message: 'Users fetched successfully',
      status: 'success',
      total: totalUsers,
      users: users,
    });
  } catch (error) {
    res.status(500).json({
      message: 'An error occurred while fetching users',
      status: 'error',
    });
  }
});

export {
  authUser,
  createUser,
  logoutUser,
  userProfile,
  updateUser,
  getUser,
  getAllUser,
};
