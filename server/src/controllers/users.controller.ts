import { Request, Response, NextFunction } from 'express';
import expressAsyncHandler from 'express-async-handler';
import User from '@/models/users.model';
import generateToken from '@/utils/generateToken';

/**
 * Check the health of the user route.
 * @route GET /api/user/health
 * @group User - Operations about user
 * @returns {object} 200 - An object indicating the health status of the user route
 * @returns {Error} 500 - Internal server error
 */
const health = expressAsyncHandler(
    async (req: Request, res: Response, next: NextFunction) => {
        res.json({
            status: res.statusCode,
            message: 'User Route health is good',
            meta: null,
            data: null,
        });
    },
);

/**
 * Authenticate a user and generate a JWT token.
 * @route POST /api/user/signIn
 * @group User - Operations about user
 * @param {string} email.body.required - User's email
 * @param {string} password.body.required - User's password
 * @returns {object} 200 - An object containing user information and JWT token
 * @returns {Error} 401 - Unauthorized
 * @returns {Error} 500 - Internal server error
 */

const signIn = expressAsyncHandler(
    async (req: Request, res: Response, next: NextFunction) => {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (user && (await user.matchPassword(password))) {
            res.json({
                status: res.statusCode,
                message: 'Login Successfully',
                meta: null,
                data: {
                    _id: user._id,
                    name: user.name,
                    email: user.email,
                    role: user.role,
                    token: generateToken(res, user._id),
                },
            });
        } else {
            res.status(401);
            throw new Error('Invalid Email or Password');
        }
    },
);

/**
 * Register a user and generate a JWT token.
 * @route POST /api/user/signUp
 * @group User - Operations about user
 * @param {string} name.body.required - User's name
 * @param {string} email.body.required - User's email
 * @param {string} role.body.required - User's role
 * @param {string} password.body.required - User's password
 * @returns {object} 200 - An object containing user information and JWT token
 * @returns {Error} 401 - Unauthorized
 * @returns {Error} 500 - Internal server error
 */

const signUp = expressAsyncHandler(
    async (req: Request, res: Response, next: NextFunction) => {
        const { name, email, role, password } = req.body;

        const userExists = await User.findOne({ email: email });

        if (userExists) {
            res.status(403);
            throw new Error('User Already Exists');
        }
        if (password.length > 6) {
            res.status(403);
            throw new Error('Invalid Email or Password');
        }

        const user = await User.create({ name, email, role, password });

        if (user) {
            res.json({
                status: res.statusCode,
                message: 'User Created.',
                meta: '',
                data: {
                    _id: user._id,
                    name: user.name,
                    email: user.email,
                    role: user.role,
                    token: generateToken(res, user._id),
                },
            });
        } else {
            res.status(400);
            throw new Error('Invalid User Data');
        }
    },
);

/**
 * Get user all details by JWT.
 * @route GET /api/user/profile
 * @group User - Operations about user
 * @param {string} jwt.required - JWT
 * @returns {object} 200 - An object containing user information
 * @returns {Error} 401 - Unauthorized
 * @returns {Error} 500 - Internal server error
 */

const profile = expressAsyncHandler(
    async (req: Request, res: Response, next: NextFunction) => {
        const user = await User.findById(req.user_id);
        console.log(user);
    },
);

const empty2 = expressAsyncHandler(
    async (req: Request, res: Response, next: NextFunction) => {},
);

export { health, signIn, signUp, profile };
