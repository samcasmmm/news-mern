import express, { Application } from 'express';
import mongoose from 'mongoose';
import compression from 'compression';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';

import 'module-alias/register';

import { Print } from '@/utils/index';

const app: Application = express();

app.use(helmet());
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(compression());

app.get('/', (req, res) => {
    res.json({ msg: Print() });
});

const listenServer = async () => {
    app.listen(7000, () => {
        console.log(`Server at http://localhost:7000`);
    });
};

listenServer();
