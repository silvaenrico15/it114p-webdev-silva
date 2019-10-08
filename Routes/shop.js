const express = require('express');

const shopController = require('../controllers/shop');

const router = express.Router();

router.get('/', shopController.getProducts);
router.get('/:id',shopController.deleteProducts)
module.exports = router;
