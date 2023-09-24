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
import { protect } from '../middlewares/AuthMiddleware.js';

const router = express.Router();

router.post('/login', authUser);

router.post('/', createUser);

router.post('/logout', logoutUser);

router.route('/profile').all(protect).get(userProfile).put(updateUser);

router.get('/:id', getUser);

router.get('/', getAllUser);

export default router;
