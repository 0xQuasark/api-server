'use strict';

require('dotenv').config();
const { Sequelize, DataTypes } = require('sequelize');
const food = require('./food.js');
const clothes = require('./clothes.js');
const authors = require('./authors.js');
const books = require('./books.js');
const Collection = require('./Collection.js');


// const SQL_CONNECTION_STRING = process.env.SQL_CONNECTION_STRING || 'sqlite:memory:';
const SQL_CONNECTION_STRING = 'sqlite:memory:';

const sequelize = new Sequelize(SQL_CONNECTION_STRING, { dialect: 'postgres', logging: false }); // this is a singleton.


const foodSQL = food(sequelize, DataTypes);
const clothesSQL = clothes(sequelize, DataTypes);

const authorSQL = authors(sequelize, DataTypes);
const bookSQL = books(sequelize, DataTypes);

// const FoodModel = food(sequelize, DataTypes);
// const ClothesModel = clothes(sequelize, DataTypes);
// const FoodModel = new Collection(foodSQL);
// const ClothesModel = new Collection(clothesSQL);

bookSQL.belongsTo(authorSQL, { foreignKey: 'authorId', targetKey: 'id' }); // if you don't do this you cannot grab Author with your Book.
authorSQL.hasMany(bookSQL, { foreignKey: 'authorId', sourceKey: 'id' }); // if don't do this you cannot grab Book with your Author.


module.exports = {
  sequelize,
  FoodModel: new Collection(foodSQL),
  ClothesModel: new Collection(clothesSQL),
  AuthorModel: new Collection(authorSQL),
  BookModel: new Collection(bookSQL)
  // FoodModel: food(sequelize, DataTypes),
  // ClothesModel: clothes(sequelize, DataTypes)
  // FoodModel,
  // ClothesModel
}