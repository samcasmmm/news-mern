//  Package imports
import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import cookieParser from 'cookie-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import helmet from 'helmet';
import morgan from 'morgan';
import fs from 'fs';

// File Imports.
import connectDatabase from './config/connectDB.js';
import { notFound, errorHandler } from './middleware/error.middleware.js';
import HttpLogger from './middleware/logger.middleware.js';
import userRoutes from './routes/users.route.js';
import postsRoutes from './routes/posts.route.js';
import categoryRoutes from './routes/category.route.js';

// Initialize App
const app = express();

// Initialize middleware
app.use(helmet());
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Custom middleware
app.use(HttpLogger);

// Initialize controllers

// Routes

app.get('/', (req, res) => {
  res.send({
    status: res.statusCode,
    message: 'success',
    url: req.url,
    meta: '',
    data: '',
  });
});

app.use('/api/users', userRoutes);
app.use('/api/posts', postsRoutes);
app.use('/api/categories', categoryRoutes);
// Error middleware

app.use(notFound);
app.use(errorHandler);

// Listen App
const startServer = () => {
  app.listen(process.env.PORT, () => {
    connectDatabase()
      .then(() => {
        console.log(`Server listening on http://localhost:${process.env.PORT}`);
      })
      .catch((error) => {
        console.error(`Error connecting to the database: ${error.message}`);
      });
  });
};

startServer();
