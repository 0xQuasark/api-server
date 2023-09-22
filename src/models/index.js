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

const sequelize = new Sequelize(SQL_CONNECTION_STRING, { dialect: 'postgres' }); // this is a singleton.

const authorModel = authors(sequelize, DataTypes);
const bookModel = books(sequelize, DataTypes);

const foodSQL = food(sequelize, DataTypes);
const clothesSQL = clothes(sequelize, DataTypes);

// class Tingle {
//   constructor(model) {
//     this.model = model;
//   }

//   async read(id, options = {}) {
//     console.log('COLLECTION READ PARAMS', id, options);
//     try {
//       if (!id) {
//         return this.model.findAll({}, options);
//       } else  {
//         return this.model.findByPk(id, options);
//       }
//     } catch(err) {
//       console.log('SOMETHING IS WRONG WHEN READING ' + this.model);
//       console.error(err);
//     }
//   }

//   async create(values) {
//     try {
//       return this.model.create(values);
//     } catch (err) {
//       console.log('TINGLE. SOMETHING WENT WRONG WHEN CREATING', this.model);
//       console.error(err);
//     }
//   }

//   async update(id, values) {
//     try {
      
//       let record = await this.model.findOne({ where: { id }});
//       await record.update(values);
//       return record;

//     } catch (err) {
//       console.log("SOMETHING WENT WRONG WHEN UPDATING", this.model);
//       console.error(err);
//     }
//   }

//   async delete(id) {
//     try {

//       let results = await this.model.destroy({ where: { id }});
//       console.log('RESULTS FROM COLLECTION', results);
//       return 'deleted';

//     } catch (err) {
//       console.log('SOMETHING WENT WRONG WHEN DELETING:', this.model);
//       console.error(err);
//     }
//   }
// }

// const FoodModel = food(sequelize, DataTypes);
// const ClothesModel = clothes(sequelize, DataTypes);
const FoodModel = new Collection(foodSQL);
const ClothesModel = new Collection(clothesSQL);

bookModel.belongsTo(authorModel, { foreignKey: 'authorId', targetKey: 'id' }); // if you don't do this you cannot grab Author with your Book.
authorModel.hasMany(bookModel, { foreignKey: 'authorId', sourceKey: 'id' }); // if don't do this you cannot grab Book with your Author.




module.exports = {
  sequelize,
  // FoodModel: new Collection(food),
  // ClothesModel: new Collection(clothes)
  // FoodModel: food(sequelize, DataTypes),
  // ClothesModel: clothes(sequelize, DataTypes)
  FoodModel,
  ClothesModel
}