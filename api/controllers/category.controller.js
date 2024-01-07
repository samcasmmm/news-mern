import Category from '../models/category.model.js';

const categoryController = {
   // Create a new category
   async createCategory(req, res) {
      try {
         const { name, description } = req.body;
         const newCategory = new Category({ name, description });
         await newCategory.save();
         res.status(201).json(newCategory);
      } catch (error) {
         res.status(400).json({ message: error.message });
      }
   },

   // Get all categories
   async getAllCategories(req, res) {
      try {
         const categories = await Category.find();
         res.json(categories);
      } catch (error) {
         res.status(500).json({ message: error.message });
      }
   },

   // Get a single category by categoryId
   async getCategory(req, res) {
      try {
         const category = await Category.findOne({ categoryId: req.params.categoryId });
         if (!category) {
            return res.status(404).json({ message: 'Category not found' });
         }
         res.json(category);
      } catch (error) {
         res.status(500).json({ message: error.message });
      }
   },

   // Update a category by categoryId
   async updateCategory(req, res) {
      try {
         const { name, description } = req.body;
         const updatedCategory = await Category.findOneAndUpdate(
            { categoryId: req.params.categoryId },
            { name, description },
            { new: true }
         );
         if (!updatedCategory) {
            return res.status(404).json({ message: 'Category not found' });
         }
         res.json(updatedCategory);
      } catch (error) {
         res.status(400).json({ message: error.message });
      }
   },

   // Delete a category by categoryId
   async deleteCategory(req, res) {
      try {
         const deletedCategory = await Category.findOneAndDelete({ categoryId: req.params.categoryId });
         if (!deletedCategory) {
            return res.status(404).json({ message: 'Category not found' });
         }
         res.json({ message: 'Category deleted' });
      } catch (error) {
         res.status(500).json({ message: error.message });
      }
   }
};

export const { createCategory, getAllCategories, getCategory, deleteCategory, updateCategory } = categoryController;
