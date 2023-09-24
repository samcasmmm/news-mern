// Package imports
import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import cookieParser from 'cookie-parser';
import cors from 'cors';
import mongoose from 'mongoose';

// File Imports

import connectDatabase from './config/MongoDb.js';
import { notFound, errorHandler } from './middlewares/errorMiddleware.js';
import userRoutes from './routes/userRoutes.js';

// Middleware
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());

// Routes

app.get('/', (req, res) => {
  res.json({
    status: 'Server is running',
    statusCode: res.statusCode,
  });
});

app.use('/api/users', userRoutes);

// Error Middleware
app.use(notFound);
app.use(errorHandler);
// Listening Server

const startServer = async () => {
  try {
    connectDatabase();
  } catch (error) {
    console.log(error);
  }
  app.listen(process.env.PORT, () => {
    console.log(
      `${process.env.NODE_ENV} server on http://localhost:${process.env.PORT}`
    );
  });
};

startServer();
