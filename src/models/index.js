'use strict';

require('dotenv').config();
const { Sequelize, DataTypes } = require('sequelize');
const FoodConnection = require('./food.js');

const SQL_CONNECTION_STRING = process.env.SQL_CONNECTION_STRING;

console.log(SQL_CONNECTION_STRING);
const sequelize = new Sequelize(SQL_CONNECTION_STRING, { dialect: 'postgres' }); // this is a singleton.

module.exports = {
  sequelize,
  FoodModel: FoodConnection(sequelize, DataTypes)
}