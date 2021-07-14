'use-strict';

const express = require('express');
const app = express();

//obtiene los stats de un picker
app.get('/picker/stats/:id', (req, res) => {

  res.json({
    OK: true,
    picker:{
      id: 'picker-1',
      stats: {
        orders_picked: 50,
        found_rate: 56,
        fill_rate:4
      }
    }
  });
});

module.exports = app;
