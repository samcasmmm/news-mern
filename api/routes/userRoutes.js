import express from 'express';
import {
  authUser,
  createUser,
  logoutUser,
  userProfile,
  updateUser,
  getUser,
  getAllUser,
} from '../controllers/userController.js';
import { protect, admin } from '../middlewares/AuthMiddleware.js';

const router = express.Router();

router.post('/login', authUser);

router.post('/', createUser);

router.post('/logout', protect, logoutUser);

router.route('/profile').all(protect).get(userProfile).put(updateUser);

router.get('/:id', getUser);

router.get('/', admin, getAllUser);

export default router;
