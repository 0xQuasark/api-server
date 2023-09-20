'use strict';

const express = require('express');
const { ClothesModel } = require('../models');

const router = express.Router(); // this can be attached to an app with specific routes

router.get('/clothes', async (req, res) => {
  // console.log('GET called')
  try {
    let records = await ClothesModel.findAll();
    res.status(200).send({ results: records });
  } catch (error) {
    console.error('Error fetching records: ', error);
  }
});

router.post('/clothes', async (req, res) => {
  // console.log('POST called')
  try {
    let record = await ClothesModel.create(req.body);
    res.status(200).json(record);
  } catch (error) {
    console.error('Error creating record: ', error);
  }
});

router.put('/clothes/:id', async (req, res) => {
  let id = req.params.id;
  let recordToUpdate = await ClothesModel.findByPk(id);
  await recordToUpdate.update(req.body);
  await recordToUpdate.save();
  res.status(200).json(recordToUpdate);
}); // route parameter => required value attached to the URI

router.delete('/clothes/:id', async (req, res) => {
  let id = req.params.id;
  // console.log('DELETE called, id: ' + id)
  // let record = await ClothesModel.findByPk(id);
  await ClothesModel.destroy({
    where: { id }
  });

  res.status(204).send('deleted');
});

module.exports = router;