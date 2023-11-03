import express from 'express';
import { createPost } from '../controllers/posts.controller.js';
import { protect } from '../middleware/auth.middleware.js';

const router = express.Router();
// POST route for creating a new post, using the controller function
router.post('/', protect, createPost);

export default router;
