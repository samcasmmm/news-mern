import express from 'express';
import {
  authUser,
  createUser,
  logoutUser,
  userProfile,
  updateUser,
  getUser,
  getAllUser,
} from '../controllers/users.controller.js';
import { protect } from '../middleware/auth.middleware.js';
const router = express.Router();

router.post('/', createUser);

router.post('/login', authUser);

router.post('/logout', logoutUser);

router.route('/profile').get(protect, userProfile).put(protect, updateUser);

router.get('/:id', getUser);
router.get('/', getAllUser);

export default router;
