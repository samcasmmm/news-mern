import asyncHandler from 'express-async-handler';
import User from '../models/userSchema.js';

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
  res.json({
    message: 'Create User',
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
  res.send({
    message: 'Get All Users',
  });
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
