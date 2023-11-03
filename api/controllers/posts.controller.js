import Post from '../models/posts.model.js';

const createPost = async (req, res) => {
  try {
    const { title, headerImage, content, author } = req.body;

    // Create a new post document
    const newPost = new Post({
      title,
      headerImage,
      content,
      author,
    });

    const savedPost = await newPost.save();

    res.status(201).json(savedPost);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error creating the post' });
  }
};

export { createPost };
