'use strict';

// make sure you include the name of the table
const bookModel = (sequelize, DataTypes) => sequelize.define('Books', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  genre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  authorId: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
});

module.exports = bookModel
