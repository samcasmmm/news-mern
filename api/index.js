// Package imports

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

// Initialize App
const app = express();

// Initialize middleware
app.use(helmet());
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Initialize controllers

// Routes

app.use((req, res, next) => {
  const logData = `${new Date().toISOString()} - ${req.method} ${req.url}\n`;
  fs.appendFile('request.log', logData, (err) => {
    if (err) {
      console.error('Error logging request:', err);
    }
  });
  next();
});

app.use('/', (req, res) => {
  res.json({
    status: res.statusCode,
    message: 'success',
    meta: '',
    data: '',
  });
});

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
