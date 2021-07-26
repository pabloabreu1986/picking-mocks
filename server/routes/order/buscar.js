'use-strict';

const express = require('express');
const app = express();

const orders = [
  {
    id : 1,
    rawOrderId: '65 - 277 - 2945',
    status: 'picking',
    idStore: '88520b86-c2c4-4f3f-9c90-647dce2073c4',
    items: [{ id: 1, sku: '209060', name: 'Leche descremada Surlat 1' }],
    customer: [
      {
        id: 1,
        firstName: 'Carol',
        lastName: 'Alvarez',
        email: 'carol.malvarez@example.com',
        phoneNumber: '+56999985716',
        rut: '11.111.111-1',
        address: 'Arturo Prat 1270',
      },
    ],
    total: 19990,
    pickingInfo: 'Mock info',
    createdAt: `${new Date()}`,
    updatedAt: `${new Date()}`,
    downloadedAt: `${new Date()}`,
  },
  {
    id : 2,
    rawOrderId: '66 - 278 - 2950',
    status: 'picking',
    idStore: '88520b86-c2c4-4f3f-9c90-647dce2073c4',
    items: [{ id: 2, sku: '209070', name: 'Leche entera Surlat 1' }],
    customer: [
      {
        id: 2,
        firstName: 'Carlos',
        lastName: 'Alvarado',
        email: 'c.alvarado@example.com',
        phoneNumber: '+56999985716',
        rut: '11.111.111-1',
        address: 'San Diego 9845',
      },
    ],
    total: 19990,
    pickingInfo: 'Mock info',
    createdAt: `${new Date()}`,
    updatedAt: `${new Date()}`,
    downloadedAt: `${new Date()}`,
  }
];

//obtiene todos los order
app.get('/order', (req, res) => {
  res.json({
    orders
  });
});

//obtiene el detalle de una orden por id
app.get('/order/:id', (req, res) => {
  const id = req.params.id;
  res.json({
    order: orders.find(order => order.id == id)
  });
});

module.exports = app;
