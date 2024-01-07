import express from 'express';
import categoryController from './category.controller.js';

const router = express.Router();

router.post('/', categoryController.createCategory);
router.get('/', categoryController.getAllCategories);
router.get('/:categoryId', categoryController.getCategory);
router.put('/:categoryId', categoryController.updateCategory);
router.delete('/:categoryId', categoryController.deleteCategory);

export default router;
