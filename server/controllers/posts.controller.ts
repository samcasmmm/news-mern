import { Request, Response, NextFunction } from 'express';
import expressAsyncHandler from 'express-async-handler';
import Post, { IPosts } from '../models/posts.model';
import generateToken from '../utils/generateToken';
import User, { IUser } from '../models/users.model';
import { HTTP, throwError } from '../helpers/httpsException';

interface UpdateReq extends Request {
    user?: IUser;
}

/**
 * Check the health of the user route.
 * @route GET /api/posts/health
 * @group posts - Operations about posts
 * @returns {object} 200 - An object indicating the health status of the user route
 * @returns {Error} 500 - Internal server error
 */
const health = expressAsyncHandler(
    async (req: Request, res: Response, next: NextFunction) => {
        res.json({
            status: res.statusCode,
            message: 'Post Route health is good',
            meta: null,
            data: null,
        });
    }
);

/**
 * Create a new post.
 * @route POST /api/posts
 * @group Posts - Operations related to posts
 * @param {string} content.body.required - The content of the post.
 * @returns {object} 200 - The created post.
 * @returns {Error} 400 - Bad request if the content is missing.
 * @returns {Error} 500 - Internal server error.
 */
const createNewPost = expressAsyncHandler(
    async (
        req: UpdateReq,
        res: Response,
        next: NextFunction
    ): Promise<void> => {
        const { title, thumbnail, author, content } = req.body;

        if (!content) {
            throwError(res, HTTP.BAD_REQUEST, 'Content is required');
        }

        try {
            const author = req.user?.id;
            const post: IPosts = await Post.create({
                title,
                thumbnail,
                author,
                content,
            });
            res.status(201).json({
                status: res.statusCode,
                message: 'Post created successfully',
                meta: null,
                data: post,
            });
        } catch (error) {
            throwError(res, HTTP.INTERNAL_SERVER_ERROR, 'Error creating post');
        }
    }
);

/**
 * Get all posts.
 * @route GET /api/posts
 * @group Posts - Operations related to posts
 * @returns {object} 200 - An array of posts.
 * @returns {object} 500 - Internal server error.
 */

const getAllPosts = expressAsyncHandler(
    async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const posts: IPosts[] = await Post.find();
            if (posts.length === 0) {
                res.status(404).json({
                    status: 404,
                    message: 'No posts found',
                    meta: null,
                    data: null,
                });
                throwError(res, HTTP.NOT_FOUND, 'No posts found');
            } else {
                res.status(200).json({
                    status: res.statusCode,
                    message: 'Posts fetched successfully',
                    meta: null,
                    data: posts,
                });
            }
        } catch (error) {
            throwError(res, HTTP.INTERNAL_SERVER_ERROR, 'Error fetching posts');
        }
    }
);

/**
 * Get a post by ID.
 * @route GET /api/posts/{id}
 * @group Posts - Operations related to posts
 * @param {string} id.path.required - The ID of the post.
 * @returns {object} 200 - The post with the specified ID.
 * @returns {object} 404 - Not found if the post with the specified ID does not exist.
 * @returns {object} 500 - Internal server error.
 */

const getPostById = expressAsyncHandler(
    async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        const postId: string = req.params.id;

        try {
            const post: IPosts | null = await Post.findById(postId);
            const author = await User.findById(post?.author);
            if (post) {
                res.status(200).json({
                    status: res.statusCode,
                    message: 'Post found',
                    meta: null,
                    data: {
                        _id: post._id,
                        title: post.title,
                        thumbnail: post.thumbnail,
                        author: {
                            id: author?._id,
                            name: author?.name,
                            email: author?.email,
                            role: author?.role,
                        },
                        content: post.content,
                    },
                });
            } else {
                throwError(res, HTTP.NOT_FOUND, 'Post not found');
            }
        } catch (error) {
            console.error('Error fetching post by ID:', error);
            res.status(500).json({
                status: 500,
                message: 'Internal server error',
                meta: null,
                data: null,
            });
        }
    }
);

export { health, createNewPost, getPostById, getAllPosts };
