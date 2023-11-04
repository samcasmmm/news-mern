import express from 'express';
import {
  createPost,
  updatePost,
  deletePost,
  getAllPosts,
  getPostById,
  searchPosts,
} from '../controllers/posts.controller.js';
import { protect } from '../middleware/auth.middleware.js';

const router = express.Router();
// POST route for creating a new post, using the controller function

router.post('/posts', createPost);
router.put('/posts/:id', updatePost);
router.delete('/posts/:id', deletePost);
router.get('/posts', getAllPosts);
router.get('/posts/:id', getPostById);
router.get('/posts/search', searchPosts);

export default router;
