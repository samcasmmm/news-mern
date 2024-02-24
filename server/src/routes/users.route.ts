import { health, signIn, signUp } from '@/controllers/users.controller';
import express from 'express';

const router = express.Router();

router.get('/hi', health);

router.post('/signIn', signIn);
router.post('/signUp', signUp);

export default router;
