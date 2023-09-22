'use strict';

const express = require('express');
const router = express.Router();
const { AuthorModel } = require('../models');

router.get('/author', handleGet);
router.post('/author', handlePost);
router.put('/author/:id', handlePut);
router.delete('/author/:id', handleDelete);


async function handleGet(req, res) {
  let records = await AuthorModel.read();
  res.status(200).json({ results: records });
}

async function handlePost(req, res) {
  let record = await AuthorModel.create(req.body);
  res.status(200).json(record);
}

async function handlePut(req, res) {
  let record = await AuthorModel.update(req.params.id, req.body);
  res.status(200).json(record);
}

async function handleDelete(req, res) {
  let result = await AuthorModel.delete(req.params.id);
  res.status(200).json({ result });
}

module.exports = router;
