import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  headerImage: {
    type: String, // You can store the image URL as a string
    required: true,
  },
  content: [
    {
      type: {
        // Type can be 'image' or 'paragraph'
        type: String,
        enum: ['image', 'paragraph'],
        required: true,
      },
      value: {
        type: String,
        required: true,
      },
    },
  ],
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  comments: [
    {
      text: {
        type: String,
        required: true,
      },
      author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
      },
      createdAt: {
        type: Date,
        default: Date.now,
      },
    },
  ],
});

const Post = mongoose.model('Post', postSchema);
export default Post;
