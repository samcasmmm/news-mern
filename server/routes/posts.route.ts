import express from 'express';
import {
    health,
    createNewPost,
    getAllPosts,
    getPostById,
} from '../controllers/posts.controller';
import { protect, isAdmin } from '../middlewares/auth.middleware';

const router = express.Router();

router.get('/health', health);
router.post('/create', protect, createNewPost);
router.get('/', getAllPosts);
router.get('/:id', protect, getPostById);
router.post('/');
router.put('/');
router.delete('/');

export default router;
