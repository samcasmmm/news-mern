// postController.js

import Post from '../models/posts.model.js';
import asyncHandler from 'express-async-handler';

const createPost = asyncHandler(async (req, res) => {
  try {
    const { title, headerImage, content, author } = req.body;

    // Create a new post document
    const newPost = new Post({
      title,
      headerImage,
      content,
      author: req.user.id,
    });

    const savedPost = await newPost.save();

    res.status(201).json(savedPost);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error creating the post' });
  }
});

const updatePost = asyncHandler(async (req, res) => {
  try {
    const postId = req.params.id;
    const { title, headerImage, content } = req.body;

    const updatedPost = await Post.findByIdAndUpdate(
      postId,
      { title, headerImage, content },
      { new: true }
    );

    if (!updatedPost) {
      return res.status(404).json({ error: 'Post not found' });
    }

    res.json(updatedPost);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error updating the post' });
  }
});

const deletePost = asyncHandler(async (req, res) => {
  try {
    const postId = req.params.id;

    const deletedPost = await Post.findByIdAndRemove(postId);

    if (!deletedPost) {
      return res.status(404).json({ error: 'Post not found' });
    }

    res.json({ message: 'Post deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error deleting the post' });
  }
});

const getAllPosts = asyncHandler(async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error fetching posts' });
  }
});

const getPostById = asyncHandler(async (req, res) => {
  try {
    const postId = req.params.id;

    const post = await Post.findById(postId);

    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }

    res.json(post);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error fetching the post' });
  }
});

const searchPosts = asyncHandler(async (req, res) => {
  try {
    const { name, author } = req.query;
    const query = {};

    if (name) {
      query.title = new RegExp(name, 'i');
    }

    if (author) {
      query.author = new RegExp(author, 'i');
    }

    const posts = await Post.find(query);
    res.json(posts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error searching for posts' });
  }
});

export {
  createPost,
  updatePost,
  deletePost,
  getAllPosts,
  getPostById,
  searchPosts,
};
