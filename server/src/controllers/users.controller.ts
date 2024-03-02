import { Request, Response, NextFunction } from 'express';
import expressAsyncHandler from 'express-async-handler';
import User, { IUser } from '@/models/users.model';
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
 * Get user details by JWT.
 * @route GET /api/user/profile
 * @group User - Operations about user
 * @param {string} jwt.required - JWT token obtained during user authentication
 * @returns {object} 200 - An object containing user information
 * @returns {Error} 401 - Unauthorized. Invalid or expired JWT token.
 * @returns {Error} 404 - User not found. User associated with the provided JWT token does not exist.
 * @returns {Error} 500 - Internal server error. An unexpected error occurred on the server.
 */

interface UpdateReq extends Request {
    user?: IUser;
}

const profile = expressAsyncHandler(
    async (req: UpdateReq, res: Response, next: NextFunction) => {
        const user = await User.findById(req.user?.id);
        if (user) {
            res.json({
                status: res.statusCode,
                message: 'Fetch Profile Successfully',
                meta: '',
                data: {
                    _id: user._id,
                    name: user.name,
                    email: user.email,
                    role: user.role,
                    createdAt: user.createdAt,
                },
            });
        } else {
            res.status(404);
            throw new Error('User not found');
        }
    },
);

/**
 * Update user profile.
 * @route PUT /api/user/update-profile
 * @group User - Operations about user
 * @param {string} jwt.required - JWT token obtained during user authentication
 * @param {object} body.required - Request body containing updated user profile details
 * @param {string} [body.name] - Updated user name
 * @param {string} [body.email] - Updated user email
 * @param {string} [body.role] - Updated user role (only accessible to admin)
 * @param {string} [body.password] - Updated user password
 * @returns {object} 200 - An object containing updated user information and a new JWT token
 * @returns {Error} 401 - Unauthorized. Invalid or expired JWT token.
 * @returns {Error} 404 - User not found. User associated with the provided JWT token does not exist.
 * @returns {Error} 500 - Internal server error. An unexpected error occurred on the server.
 */

const updateProfile = expressAsyncHandler(
    async (req: UpdateReq, res: Response, next: NextFunction) => {
        const { name, email, role, password } = req.body;
        const user = await User.findById(req.user?.id);
        if (user) {
            user.name = name || user.name;
            user.email = email || user.email;
            if (req.body.role) {
                user.role = role;
            }
            if (req.body.password) {
                user.password = password;
            }
            const updatedUser = await user.save();
            res.json({
                status: res.statusCode,
                message: 'Profile Update Successfully',
                meta: '',
                data: {
                    _id: updatedUser._id,
                    name: updatedUser.name,
                    email: updatedUser.email,
                    role: updatedUser.role,
                    token: generateToken(res, updatedUser._id),
                },
            });
        } else {
            res.status(404);
            throw new Error('User not found');
        }
    },
);

/**
 * Get user profile by ID.
 * @route GET /api/user/{id}
 * @group User - Operations about user
 * @param {string} id.path.required - User ID
 * @returns {object} 200 - An object containing user information
 * @returns {Error} 404 - User not found. The user with the specified ID does not exist.
 * @returns {Error} 500 - Internal server error. An unexpected error occurred on the server.
 */

const userById = expressAsyncHandler(
    async (req: Request, res: Response, next: NextFunction) => {
        const { id } = req.params;
        const user = await User.findById(id);
        if (user) {
            res.json({
                status: res.statusCode,
                message: 'Fetch Profile Successfully',
                meta: null,
                data: {
                    _id: user._id,
                    name: user.name,
                    email: user.email,
                    role: user.role,
                    createdAt: user.createdAt,
                },
            });
        } else {
            res.status(404);
            throw new Error('User not found');
        }
    },
);

/**
 * Search for users by name or email.
 * @route GET /api/users/search
 * @group Users - Operations related to users
 * @param {string} [name.query] - The name to search for.
 * @param {string} [email.query] - The email to search for.
 * @returns {object} 200 - An array of user profiles matching the search criteria.
 * @returns {object} 400 - Bad request if both name and email are provided or if neither are provided.
 * @returns {object} 404 - Not found if no users match the search criteria.
 * @returns {Error} 500 - Internal server error.
 */

const searchUserByQuery = expressAsyncHandler(
    async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        const { name, email, role } = req.query;

        // Check if both name and email are provided
        // if (name && email) {
        //     res.status(400).json({
        //         status: res.statusCode,
        //         message:
        //             'Please provide either a name or an email, not both, for the search',
        //         meta: null,
        //         data: null,
        //     });
        // }

        if (!name && !email && !role) {
            res.status(400).json({
                status: res.statusCode,
                message: 'Please provide a name, email, or role for the search',
                meta: null,
                data: null,
            });
        }

        try {
            let query: any = {};

            if (name) {
                const nameRegex = new RegExp(name.toString(), 'i');
                query.name = { $regex: nameRegex };
            }
            if (email) {
                query.email = email;
            }
            if (role) {
                query.role = role;
            }

            const users = await User.find(query);

            if (users.length > 0) {
                const responseData = users.map((user) => ({
                    _id: user._id,
                    name: user.name,
                    email: user.email,
                    role: user.role,
                    createdAt: user.createdAt,
                }));
                res.json({
                    status: res.statusCode,
                    message: 'Fetch Profiles Successfully',
                    meta: null,
                    data: responseData,
                });
            } else {
                res.status(404).json({
                    status: res.statusCode,
                    message: 'No users found',
                    meta: null,
                    data: null,
                });
            }
        } catch (error) {
            console.error('Error searching for users:', error);
            res.status(500).json({
                status: res.statusCode,
                message: 'Internal server error',
                meta: null,
                data: null,
            });
        }
    },
);

const getAllUsers = expressAsyncHandler(
    async (
        req: Request,
        res: Response,
        next: NextFunction,
    ): Promise<void> => {},
);

const emp = expressAsyncHandler(
    async (req: Request, res: Response, next: NextFunction) => {},
);

export {
    health,
    signIn,
    signUp,
    profile,
    updateProfile,
    userById,
    searchUserByQuery,
};
