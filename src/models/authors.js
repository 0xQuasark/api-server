'use strict';

// make sure you include the name of the table
const authorModel = (sequelize, DataTypes) => sequelize.define('Authors', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  website: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = authorModel
