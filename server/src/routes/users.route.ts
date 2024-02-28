import {
    health,
    signIn,
    signUp,
    profile,
    updateProfile,
    userById,
} from '@/controllers/users.controller';
import { protect, isAdmin } from '../middlewares/auth.middleware';
import express from 'express';

const router = express.Router();

router.get('/health', health);

router.route('/profile').get(protect, profile).put(protect, updateProfile);

router.get('/profile/:id', userById);

router.post('/signIn', signIn);

router.post('/signUp', signUp);

export default router;
