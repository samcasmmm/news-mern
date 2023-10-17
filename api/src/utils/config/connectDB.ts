import { error } from 'console';
import mongoose from 'mongoose';

const connectDatabase = async () => {
  const { MONGO_PATH, MONGO_USER, MONGO_PASSWORD } = process.env;
  mongoose
    .connect(`mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}${MONGO_PATH}`)
    .then(() => {
      console.log('MongoDB Connected');
    })
    .catch((error) => {
      console.warn(error);
      process.exit(1);
    });
};

export default connectDatabase;
