const express = require('express');
const router = express.Router();

const productController = require('../controllers/product');

// add-product => GET
router.get('/add-product', productController.getAddProduct);

// add-product => POST
router.post('/add-product', productController.postAddProduct);

exports.routes = router;
