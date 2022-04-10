const express = require('express');
const app = express();
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const routes = require('./routes');
const cors = require('cors');

const corsOptions = {
  origin: '*',
};

if(process.env.NODE_ENV === 'development') {
  app.use(logger('dev'));
}
app.set('port', process.env.PORT || 3000)
app.use(favicon(path.join(__dirname, 'build/prueba-avia', 'favicon.ico')));
app.use('/api/v1',cors(corsOptions) ,routes);
app.use('/', express.static(path.join(__dirname, 'build/prueba-avia')));
app.get('*', (req, res) => {
  res.send('<script>window.location.href = "/"</script>');
  res.sendFile(path.join(__dirname, 'build/prueba-avia/index.html'));
});
module.exports = app