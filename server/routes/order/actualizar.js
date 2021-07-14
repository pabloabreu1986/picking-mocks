'use-strict';

const express = require('express');
const app = express();

app.put('/order/:id', (req, res) => {
  let id = req.params.id;
  const order = req.body;
    res.json({
      UPDATED: true,
      order 
    });
  });

module.exports = app;
