'use strict';

const express = require('express');
const router = express.Router();
const { BookModel } = require('../models');

router.get('/book', handleGet);
router.post('/book', handlePost);
router.put('/book/:id', handlePut);
router.delete('/book/:id', handleDelete);


async function handleGet(req, res) {
  let records = await BookModel.read();
  res.status(200).json({ results: records });
}

async function handlePost(req, res) {
  console.log('Body: ', req.body);
  let record = await BookModel.create(req.body);
  res.status(200).json(record);
  console.log('RECORD: ', record);
}

async function handlePut(req, res) {
  let record = await BookModel.update(req.params.id, req.body);
  res.status(200).json(record);
}

async function handleDelete(req, res) {
  let result = await BookModel.delete(req.params.id);
  res.status(200).json({ result });
}

module.exports = router;
