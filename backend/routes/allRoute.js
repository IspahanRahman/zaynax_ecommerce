const apiRoute = require('express').Router();

const orderRoute = require('./orderRoute');
const productRoute = require('./productRoute');
const promoCodeRoute = require('./promoCodeRoute');
const authRoute = require('./authRoute');

apiRoute.use(orderRoute);
apiRoute.use(productRoute);
apiRoute.use(promoCodeRoute);
apiRoute.use(authRoute);

module.exports = apiRoute;