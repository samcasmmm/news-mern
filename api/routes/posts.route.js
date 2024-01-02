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

router.post('/', createPost);
router.put('/:id', updatePost);
router.delete('/:id', deletePost);
router.get('/posts/all', getAllPosts);
router.get('/posts/:id', getPostById);
router.get('/posts/search', searchPosts);

export default router;
