const authRoute = require('express').Router();
const { user_signup,admin_signIn } = require('../controllers/authenticationController');

authRoute.post('/user_signup',user_signup);
authRoute.post('/admin_signIn',admin_signIn);

module.exports = authRoute;
