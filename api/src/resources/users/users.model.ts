import mongoose, { Model, Schema } from 'mongoose';
import IUsers from './users.interface.js';

const userSchema = new Schema<IUsers>(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const UserModel: Model<IUsers> = mongoose.model<IUsers>('User', userSchema);

export default UserModel;
