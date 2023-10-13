import express,{Application} from 'express'
import mongoose from 'mongoose'
import compression from 'compression';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';

import Controller from '@/utils/interfaces/controller.interface.ts';
import ErrorMiddleware from '@/middlewares/error.middleware.ts';

class App {
   public express:Application;
   public port: number;

   constructor(controllers:Controller[], port: number) {
      this.express = express();
      this.port = port;
      
      this.initializeDatabaseConnection();
      this.initializeMiddleware();
      this.initializeControllers(controllers);
      this.initializeErrorHandling();
      
   }

   private initializeMiddelware(): void {
      this.express.use(helmet())
      this.express.use(cors())
      this.express.use(morgan('dev'))
      this.express.use(express.json())
   }
}