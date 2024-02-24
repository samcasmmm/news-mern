// Packages Imports
import express, { Application } from 'express';
import mongoose from 'mongoose';
import compression from 'compression';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import dotenv from 'dotenv';
dotenv.config();
import 'module-alias/register';


// File Imports
import connectDatabase from '@/config/connectDB';
import generateToken from '@/utils/generateToken'
import { ROUTES } from './routes';
import { errorHandler, notFound } from '@/middlewares/error.middleware';
import { pathBuilder } from './utils/helpers';

import usersRoute from '@/routes/users.route'


// Initialize App
const app: Application = express();


// Initialize middleware
app.use(helmet());
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(compression());


// Custom middleware

// Routes
// app.use(path,middlewares,routeFn)


app.get('/', (req, res) => {
    res.json({
        status:res.statusCode,
        message:'Welcome to Homepage',
        meta:null,
        data:null
     })
});

app.use(pathBuilder('/users'), usersRoute)

// Middlewares

app.use(errorHandler)
app.use(notFound)

const listenServer = async () => {
    app.listen(7000, () => {
        console.log(`Server at http://localhost:7000`);
        connectDatabase();
    });
};

listenServer();
