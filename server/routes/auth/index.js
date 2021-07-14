'use-strict';

const express = require('express');
const app = express();

// autentica el picker
app.get('/auth/:id', (req, res) => {
  let id = req.params.id;

    res.json({
      picker: {
        id: '1',
        name: 'Pablo Abreu',
      }
    });
  });

module.exports = app;
