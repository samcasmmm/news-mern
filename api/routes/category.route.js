import express from 'express';
import { } from './category.controller.js';

const router = express.Router();

router.post('/', createCategory);
router.get('/', getAllCategories);
router.get('/:categoryId', getCategory);
router.put('/:categoryId', updateCategory);
router.delete('/:categoryId', deleteCategory);
router.delete('/:categoryId', deleteCategory);

export default router;
