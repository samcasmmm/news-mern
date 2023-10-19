// Package imports

import express, { Application } from 'express';
import dotenv from 'dotenv';
dotenv.config();
import cookieParser from 'cookie-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import helmet from 'helmet';
import morgan from 'morgan';
import compression from 'compression';

// File Imports

import connectDatabase from '@/utils/config/connectDB.js';
import { Controllers } from '@/utils/interface/controllers.interface.js';

// Initialize Application

const App = (controllers: Controllers[], port: number) => {
  const app: Application = express();

  // Initialize database connection
  connectDatabase();

  // Initialize middleware
  app.use(helmet());
  app.use(cors());
  app.use(morgan('dev'));
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(compression());

  // Initialize controllers
  controllers.forEach((controller: any) => {
    app.use('/api', controller.router);
  });

  return app;
};

export default App;
