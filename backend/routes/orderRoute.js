const orderRoute = require('express').Router();
const { placeOrder,getOrders } = require('../controllers/orderController');

orderRoute.post('/place-order',placeOrder);
orderRoute.post('/getOrders',getOrders);

module.exports = orderRoute;
