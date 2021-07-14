'use-strict';

const express = require('express');
const app = express();
const { verificarToken } = require('../../middlewares/auth');

//obtiene un producto por un termino
app.get('/order/buscar/:id', (req, res) => {

  res.json({
    OK: true,
    order:{
      id: 'order-1',
      products: [
        {
          id: 'product-1',
          name: 'Pollo'
        }
      ]
    }
  });
});

module.exports = app;
