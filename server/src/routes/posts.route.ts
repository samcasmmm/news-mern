import express from 'express';
import { health, createNewPost } from '@/controllers/posts.controller';

const router = express.Router();

router.get('/health', health);
router.post('/create', createNewPost);
router.post('/');
router.put('/');
router.delete('/');

export default router;
