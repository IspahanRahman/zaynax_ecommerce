const productRoute = require('express').Router();
const { create_product,getProducts } = require('../controllers/productController');

productRoute.get('/getProducts',getProducts);
productRoute.post('/create_product',create_product);

module.exports = productRoute;
