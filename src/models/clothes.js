'use strict';

// make sure you include the name of the table
const ClothesModel = (sequelize, DataTypes) => sequelize.define('Clothes', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  color: {
    type: DataTypes.STRING,
    allowNull: true
  }
});

module.exports = ClothesModel
