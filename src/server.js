'use strict';

const express = require('express');
const cors = require('cors');
const app = express(); // singleton -> there can only be one

const foodRouter = require('./routes/food.js');
const notFoundHandler = require('./error-handlers/404.js');
const serverErrorHandler = require('./error-handlers/500.js');

app.use(cors());
app.use(express.json());
app.use(foodRouter);

// errorHandlers go down
app.use(notFoundHandler);
app.use(serverErrorHandler);
app.use('/*', (req, res) => {
  res.send('Recheck your URL and Try again!')
});


module.exports = {
  app,
  start: (port) => {
    app.listen(port, () => {
      console.log('REST server is running on port ' + port);
    });``
  }
}