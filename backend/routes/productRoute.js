import express from 'express';
import { addProduct, listProduct, removeProduct, singleProduct } from '../controllers/productController.js';

const productRouter = express.Router();

productRouter.post('/add', addProduct);
productRouter.get('/list', listProduct);
productRouter.delete('/remove', removeProduct);
productRouter.get('/single', singleProduct);

export default productRouter;
