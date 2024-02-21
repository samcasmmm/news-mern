import express, { Application } from 'express';
import mongoose from 'mongoose';
import compression from 'compression';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import dotenv from 'dotenv';
dotenv.config();

import 'module-alias/register';

import connectDatabase from '@/config/connectDB';
import generateToken from './utils/generateToken';
import { ROUTES } from './routes';

const app: Application = express();

app.use(helmet());
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(compression());

// Routes
app.get('/', (req, res) => {
    res.json({
        token: generateToken({ res, userId: '123456789' }),
    });
});
ROUTES.forEach((api) => {
    const middleware = api.middleware ? api.middleware.map((m) => m) : [];
    app.use(api.path, middleware, api.route);
});

// Middlewares

const listenServer = async () => {
    app.listen(7000, () => {
        console.log(`Server at http://localhost:7000`);
        connectDatabase();
    });
};

listenServer();
