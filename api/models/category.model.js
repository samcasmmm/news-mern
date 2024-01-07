import mongoose from 'mongoose';

const counterSchema = new mongoose.Schema({
   _id: { type: String, required: true },
   seq: { type: Number, default: 0 }
});

const Counter = mongoose.model('Counter', counterSchema);

const categorySchema = new mongoose.Schema({
   categoryId: {
      type: Number,
      unique: true
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

categorySchema.pre('save', function (next) {
   const doc = this;
   Counter.findByIdAndUpdate(
      { _id: 'categoryId' },
      { $inc: { seq: 1 } },
      { new: true, upsert: true }
   )
      .then((counter) => {
         doc.categoryId = counter.seq;
         next();
      })
      .catch((error) => {
         throw new Error(error);
      });
});

const Category = mongoose.model('Category', categorySchema);
export default Category;
