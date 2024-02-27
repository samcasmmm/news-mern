import {
    health,
    signIn,
    signUp,
    profile,
} from '@/controllers/users.controller';
import { protect, isAdmin } from '../middlewares/auth.middleware';
import express from 'express';

const router = express.Router();

router.get('/health', health);
router.get('/profile', protect, profile);

router.post('/signIn', signIn);
router.post('/signUp', signUp);

export default router;
