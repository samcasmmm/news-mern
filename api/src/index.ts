import express from 'express';
import createApp from './app.js';
import { Controllers } from '@/utils/index.js';

// Define your router instances as functions that return an express.Router
const someRouterInstance = () => {
  const router = express.Router();
  router.get('/health', (req, res) => {
    res.status(200).json({ status: 'Server is up and running' });
  });
  return router;
};

// Define your other router instances similarly
const notherRouterInstance = () => {
  const router = express.Router();
  // Define routes for this router
  return router;
};

// Create an array of controllers
const controllers: Controllers[] = [
  { router: someRouterInstance() }, // Call the function to get the router instance
  // Add other controllers as needed
];

// Create your Express app and pass the controllers
const app = createApp(controllers, 9000);

app.listen(9000, () => {
  console.log(`Server is running on port 9000`);
});
