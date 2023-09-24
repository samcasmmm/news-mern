import asyncHandler from 'express-async-handler';
import User from '../models/userSchema.js';
import generateToken from './../utils/generateToken.js';

// --  desc   -  Auth user/set token
// @ route    -  POST /api/users/auth
// ? access   -  Public
const authUser = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user && (await user.matchPassword(password))) {
    res.json({
      status: res.statusCode,
      message: 'Logged In.',
      meta: '',
      data: {
        _id: user._id,
        name: user.name,
        email: user.email,
        userType: user.userType,
        token: generateToken(res, user._id),
      },
    });
  } else {
    res.status(401);
    throw new Error('Invalid Email or Password');
  }
});

// -- desc   -  Create a User
// @ route   -  POST /api/users/
// ? access  -  Public
const createUser = asyncHandler(async (req, res, next) => {
  const { name, email, userType, password } = req.body;

  const userExists = await User.findOne({ email: email });

  if (userExists) {
    res.status(403);
    throw new Error('User Already Exists');
  }

  if (password.length < 6) {
    res.status(403);
    throw new Error('Password must be at least 6 characters long.');
  }

  const user = await User.create({ name, email, userType, password });

  if (user) {
    res.json({
      status: res.statusCode,
      message: 'User Created.',
      meta: '',
      data: {
        _id: user._id,
        name: user.name,
        email: user.email,
        userType: user.userType,
        token: generateToken(res, user._id),
      },
    });
  } else {
    res.status(400);
    throw new Error('Invalid User Data');
  }
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
  const { name, email, userType, password } = req.body;
  const user1 = await User.findById(req.user._id);
  console.log(user1);
  const user = await User.findOne({ email });

  if (user) {
    user.name = name || user.name;
    user.email = email || user.email;
    if (req.body.userType) {
      user.userType = userType;
    }
    if (req.body.password) {
      user.password = password;
    }
    const updatedUser = await user.save();
    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      userType: updatedUser.userType,
      token: generateToken(res, updatedUser._id),
    });
  } else {
    res.status(404);
    throw new Error('User not found');
  }
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
  const { userType, page = 1, perPage = 10 } = req.query;

  try {
    let query = {};

    if (userType === 'all') {
    } else if (
      userType === 'user' ||
      userType === 'admin' ||
      userType === 'employee'
    ) {
      query = { userType: userType };
    } else {
      return res.status(400).json({
        message: 'Invalid userType',
        status: 'error',
      });
    }

    const totalUsers = await User.countDocuments(query);
    const totalPages = Math.ceil(totalUsers / perPage);

    if (page > totalPages) {
      return res.status(400).json({
        message: 'Invalid page number',
        status: 'error',
      });
    }

    const users = await User.find(query)
      .select('-password')
      .skip((page - 1) * perPage)
      .limit(Number(perPage));

    res.status(200).json({
      message: 'Users fetched successfully',
      status: 'success',
      total: totalUsers,
      perPage: perPage,
      page: Number(page),
      totalPages: totalPages,
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
