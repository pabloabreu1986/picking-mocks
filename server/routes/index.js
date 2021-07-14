'use-strict';

const express = require('express');
const app = express();

//auth
app.use(require('./auth/auth'));

// picker
app.use(require('./picker/status'));
app.use(require('./picker/stats'));

//orders
app.use(require('./order/buscar'));
app.use(require('./order/actualizar'));



module.exports = app;
