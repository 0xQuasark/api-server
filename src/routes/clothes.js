'use strict';

const express = require('express');
const router = express.Router();
const { ClothesModel } = require('../models');

router.get('/clothes', handleGet);
router.post('/clothes', handlePost);
router.put('/clothes/:id', handlePut);
router.delete('/clothes/:id', handleDelete);


async function handleGet(req, res) {
  let records = await ClothesModel.read();
  res.status(200).json({ results: records });
}

async function handlePost(req, res) {
  let record = await ClothesModel.create(req.body);
  res.status(200).json(record);
}

async function handlePut(req, res) {
  let record = await ClothesModel.update(req.params.id, req.body);
  res.status(200).json(record);
}

async function handleDelete(req, res) {
  let result = await ClothesModel.delete(req.params.id);
  res.status(200).json({ result });
}

module.exports = router;
