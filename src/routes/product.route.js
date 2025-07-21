//router
import { Router } from 'express';
import productController from '../controllers/product.controller.js';
import { authentication } from '../middlewares/auth.middleware.js';

const router = Router();

router.get('/', productController.getProducts);
router.get('/:id', productController.getProductById);
router.post('/', authentication, productController.createProduct);
router.put('/:id', authentication, productController.updateProduct);
router.delete('/:id', authentication, productController.deleteProduct);

export default router;
