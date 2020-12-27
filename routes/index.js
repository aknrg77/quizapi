const express = require('express');
const route = express.Router();
const homeController = require('../controllers/homeController');
const signupController = require('../controllers/signup');
const loginController = require('../controllers/loginController');
const profileController = require('../controllers/profile');
const verify = require('../middlewares/verifyToken');
const changeController = require('../controllers/changeController');


route.get('/',homeController.home);

route.post('/signup',signupController.signup);

route.post('/login',loginController.login);

route.get('/profile',verify.verify,profileController.profile);

route.post('/changePass',verify.verify,changeController.change);

route.use('/users', require('./users'));

module.exports = route;