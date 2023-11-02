import express from 'express';
import {
  authUser,
  createUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  getAllUsers,
} from '../controllers/users.controller.js';
// import { authMiddleware } from '../middlewares/authMiddleware.js';
const router = express.Router();

router.post('/', createUser);

router.post('/auth', authUser);

router.post('/logout', logoutUser);

// router
//   .route('/profile')
//   .get(authMiddleware, getUserProfile)
//   .put(authMiddleware, updateUserProfile);

router.get('/', getAllUsers);

export default router;
