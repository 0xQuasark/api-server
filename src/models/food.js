'use strict';

// make sure you include the name of the table
const FoodModel = (sequelize, DataTypes) => sequelize.define('Food', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  flavor: {
    type: DataTypes.STRING,
    allowNull: true
  }
});

module.exports = FoodModel
