'use strict';

const express = require('express');
const router = express.Router();
const { FoodModel } = require('../models');

router.get('/food', handleGet);
router.post('/food', handlePost);
router.put('/food/:id', handlePut);
router.delete('/food/:id', handleDelete);


async function handleGet(req, res) {
  let records = await FoodModel.read();
  res.status(200).json({ results: records });
}

async function handlePost(req, res) {
  let record = await FoodModel.create(req.body);
  res.status(200).json(record);
}

async function handlePut(req, res) {
  let record = await FoodModel.update(req.params.id, req.body);
  res.status(200).json(record);
}

async function handleDelete(req, res) {
  let result = await FoodModel.delete(req.params.id);
  res.status(200).json({ result });
}

module.exports = router;
