'use-strict';

require('./config/config');
const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');

app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

//configurar public
app.use(express.static(path.resolve(__dirname, '../public')));

//configuración global de rutas
app.use(require('./routes/index'));

app.listen(process.env.PORT, () => {
  console.log('Server listening at port: ', process.env.PORT);
});
