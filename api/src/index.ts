import express from 'express';
import createApp from './app.js';
import { Controllers } from '@/utils/index.js';

const routers = express.Router();

const someRouterInstance = () => {
  routers.get('/health', (req, res) => {
    res.status(200).json({ status: 'Server is up and running' });
  });
};
const notherRouterInstance = () => {};

const controllers: Controllers[] = [
  { router: someRouterInstance },
];

const app = createApp(controllers:, 9000);

app.listen(9000, () => {
  console.log(`Server is running on port 9000`);
});
//
//
//
