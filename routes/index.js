const indexRouter = require('express').Router();
indexRouter.use('/hotels', require('../apiService/Hoteles/hoteles.routes'));
module.exports = indexRouter;