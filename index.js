'use strict';

require('dotenv').config();
const { sequelize } = require('./src/models');  // index.js acts as a barrel file here, rolls up the dir
const server = require('./src/server.js');
const PORT = process.env.PORT || 3001;

sequelize.sync()
  .then(() => {
    server.start(PORT);
  });
