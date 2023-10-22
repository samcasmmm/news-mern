import mongoose, { Model, Schema } from 'mongoose';
import Users from './users.interface.js';

const userSchema = new Schema<Users>({
  name: String,
  email: String,
  password: String,
});

const UserModel: Model<Users> = mongoose.model<Users>('User', userSchema);

export default UserModel;
