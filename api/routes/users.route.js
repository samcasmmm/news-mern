import express from 'express';
import {
  authenticateUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  getAllUsers,
} from '../controllers/users.controller.js';
// import { authMiddleware } from '../middlewares/authMiddleware.js';
const router = express.Router();

router.post('/', registerUser);

router.post('/auth', authenticateUser);

router.post('/logout', logoutUser);

// router
//   .route('/profile')
//   .get(authMiddleware, getUserProfile)
//   .put(authMiddleware, updateUserProfile);

router.get('/', getAllUsers);

export default router;
