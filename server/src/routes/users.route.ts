import { health, signIn, signUp } from '@/controllers/users.controller';
import express from 'express';

const router = express.Router();

router.get('/health', health);

router.post('/signIn', signIn);
router.post('/signUp', signUp);

export default router;
