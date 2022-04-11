const express = require('express');
const app = express();
const path = require('path');
const logger = require('morgan');
const routes = require('./routes');
const cors = require('cors');

const corsOptions = {
  origin: '*',
};

if (process.env.NODE_ENV === 'development') {
  app.use(logger('dev'));
}

const url = (process.env.NODE_ENV !== 'production') && (process.env.NODE_ENV!==undefined) ? 'build/public/prueba-avia' : 'public/prueba-avia';
app.set('port', process.env.PORT || 3000)
app.use(express.json())
app.use('/api/v1', cors(corsOptions), routes);
app.use('/', express.static(path.join(__dirname, url)));
app.get('*', (req, res) => {
  res.redirect('/');
});
module.exports = app