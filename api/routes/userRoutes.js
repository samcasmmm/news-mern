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

const router = express.Router();

router.post('/auth', authUser);

router.post('/', createUser);

router.post('/logout', logoutUser);

router.route('/profile').get(userProfile).put(updateUser);

router.get('/:id', getUser);

router.get('/', getAllUser);

export default router;
