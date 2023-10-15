import dotenv from 'dotenv';
dotenv.config();
import 'module-alias/register';
import App from 'app';

const createAndStartApp = () => {
  const app = new App([], Number(process.env.PORT));
  app.listen();
};

createAndStartApp();
