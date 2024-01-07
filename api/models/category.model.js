import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema({
   id: {
      type: Number,
   },
   name: {
      type: String,
      required: true,
      unique: true
   },
   description: {
      type: String,
      required: true
   },
   createdAt: {
      type: Date,
      default: Date.now
   }
});
const Category = mongoose.model('Category', categorySchema);
export default Category 