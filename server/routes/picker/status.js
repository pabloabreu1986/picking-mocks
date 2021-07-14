'use-strict';

const express = require('express');
const app = express();

app.put('/picker/:id', (req, res) => {
  let id = req.params.id;
  const status = req.body.status;
    res.json({
      OK: true,
      picker: {
        id,
        status
      }
    });
  });

module.exports = app;
