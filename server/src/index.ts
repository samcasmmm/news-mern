import express, { Application } from "express";
import mongoose from "mongoose";
import compression from "compression";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";

const app: Application = express();

const listenServer = async () => {
  app.listen(7000, () => {
    console.log(`Server at localhost:7000`);
  });
};
