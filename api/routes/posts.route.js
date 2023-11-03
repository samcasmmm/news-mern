import express from 'express';
import { createPost } from '../controllers/posts.controller.js';

const router = express.Router();
// POST route for creating a new post, using the controller function
router.post('/', createPost);

export default router;
