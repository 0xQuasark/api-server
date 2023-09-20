'use strict';

const express = require('express');
const { FoodModel } = require('../models');

const router = express.Router(); // this can be attached to an app with specific routes

router.get('/food', async (req, res) => {
  // console.log('GET called')
  try {
    let records = await FoodModel.findAll();
    res.status(200).send({ results: records });
  } catch (error) {
    console.error('Error fetching records: ', error);
  }
});

router.post('/food', async (req, res) => {
  // console.log('POST called')
  try {
    let record = await FoodModel.create(req.body);
    res.status(200).json(record);
  } catch (error) {
    console.error('Error creating record: ', error);
  }
});

router.put('/food/:id', async (req, res) => {
  let id = req.params.id;
  let recordToUpdate = await FoodModel.findByPk(id);
  await recordToUpdate.update(req.body);
  await recordToUpdate.save();
  res.status(200).json(recordToUpdate);
}); // route parameter => required value attached to the URI

router.delete('/food/:id', async (req, res) => {
  let id = req.params.id;
  // console.log('DELETE called, id: ' + id)
  // let record = await FoodModel.findByPk(id);
  await FoodModel.destroy({
    where: { id }
  });

  res.status(204).send('deleted');
});

module.exports = router;