import jwt, { JwtPayload } from 'jsonwebtoken';
import express, { Request, Response, NextFunction } from 'express';
import expressAsyncHandler from 'express-async-handler';
import User, { UserDocument } from '@/models/users.model';

interface AuthRequest extends Request {
    user?: UserDocument;
}

interface TokenPayload extends JwtPayload {
    userId: string;
}

const Protect = expressAsyncHandler(
    async (req: AuthRequest, res: Response, next: NextFunction) => {
        let token: string | undefined;

        if (
            req.headers.authorization &&
            req.headers.authorization.startsWith('Bearer')
        ) {
            try {
                token = req.headers.authorization.split(' ')[1];
                const secretKey = process.env.SECRET_KEY!;
                const decoded = jwt.verify(token, secretKey) as TokenPayload;
                const user: UserDocument | null = await User.findById(
                    decoded.userId,
                ).select('-password');

                if (user) {
                    req.user = user;
                    console.log(req.user);
                    next();
                } else {
                    res.status(404);
                    throw new Error('User not found');
                }
            } catch (error) {
                console.error(error);
                res.status(401).send({
                    message: 'Not Authorized, Token Failed',
                });
            }
        }

        if (!token) {
            res.status(401).send({ message: 'Not Authorized, No Token' });
        }
    },
);

const admin = expressAsyncHandler(
    async (req: AuthRequest, res: Response, next: NextFunction) => {
        let token: string | undefined;
        let secret_key = process.env.SECRET_KEY!;
        if (
            req.headers.authorization &&
            req.headers.authorization.startsWith('Bearer')
        ) {
            try {
                token = req.headers.authorization.split(' ')[1];
                const decoded = jwt.verify(token, secret_key) as TokenPayload;
                const user: UserDocument | null = await User.findById(
                    decoded.userId,
                ).select('-password');

                if (user && user.userType === 'admin') {
                    req.user = user;
                    console.log(req.user);
                    next();
                } else {
                    res.status(401).send({
                        message: 'Not Authorized, No Access',
                    });
                    throw new Error('Not Authorized, No Access');
                }
            } catch (error) {
                console.error(error);
                res.status(401).send({
                    message: 'Not Authorized, Token Failed',
                });
                throw new Error('Not Authorized, Token Failed');
            }
        }

        if (!token) {
            res.status(401).send({ message: 'Not Authorized, No Token' });
            throw new Error('Not Authorized, No Token');
        }
    },
);

export { Protect, admin };
