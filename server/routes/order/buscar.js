'use-strict';

const express = require('express');
const app = express();

const ordersMock = require('./ordersMock');

const orders = [
  {
    id: 1,
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
    id: 2,
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
  res.json(
    ordersMock[req.type]);
});

//obtiene el detalle de una orden por id
app.get('/order/:type', (req, res) => {
  console.log('Received params: ', req.params);

  const { type } = req.params;

  let data = ordersMock[0];
  let messageLog = 'Requested Jumbo order id: ';

  if (type == 2) {
    messageLog = 'Requested Easy orders Array id: ';
    data = ordersMock[1]
  }

  console.log(messageLog, type);
  return res.json({
    data
  });
});

module.exports = app;
