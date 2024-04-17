const express = require('express');
const router = express.Router();
const productController = require('../controller/productController')

router.post('/create', productController.createProduct);
router.get('/get/:prodId', productController.getProduct);
router.get('/all',productController.getAllProducts);
router.delete('/delete/:prodId',productController.deleteProduct)

module.exports = router;