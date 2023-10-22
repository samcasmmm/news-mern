import { Document } from 'mongoose';

export default interface Users extends Document {
  name: string;
  email: string;
  password: string;
}
