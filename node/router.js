const express = require('express');
const initRouter = express();

//Users Routes
const usersRoute = require('./src/router/userRouter');
initRouter.use('/user', usersRoute);

//product Routes
const productRouter = require('./src/router/productRouter');
initRouter.use('/product', productRouter);

module.exports = initRouter;