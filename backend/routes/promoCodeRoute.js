const promoCodeRoute = require('express').Router();
const { create_promo_code,getPromoCodes } = require('../controllers/promoCodeController');

promoCodeRoute.get('/getPromoCodes',getPromoCodes);
promoCodeRoute.post('/create_promo_code',create_promo_code);

module.exports = promoCodeRoute;
