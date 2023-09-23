import asyncHandler from 'express-async-handler';
import User from '../models/userSchema';

// --  desc   -  Auth user/set token
// @ route   -  POST /api/users/auth
// ? access -  Public
const authUser = asyncHandler(async (req, res, next) => {});

// -- desc   -  Create a User
// @ route   -  POST /api/users/
// ? access -  Public
const createUser = asyncHandler(async (req, res, next) => {});

// -- desc   -  Logout a User
// @ route   -  POST /api/users/logout
// ? access -  Public
const logoutUser = asyncHandler(async (req, res, next) => {});

// -- desc   -  Get User Profile
// @ route   -  GET /api/users/profile
// ? access -  Public
const userProfile = asyncHandler(async (req, res, next) => {});

// -- desc   -  Update User
// @ route   -  POST /api/users/profile
// ? access -  Public
const updateUser = asyncHandler(async (req, res, next) => {});

export { authUser, createUser, logoutUser, userProfile, updateUser };
