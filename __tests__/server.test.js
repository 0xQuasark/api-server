'use strict';

const supertest = require('supertest');
const server = require('../src/server.js');
const { sequelize, AuthorModel} = require('../src/models/');
const request = supertest(server.app);

let testAuthor;

// built in jest function, setup our test suite
beforeAll(async () => {
  await sequelize.sync(); // sets up our tables before tests run
  testAuthor = await AuthorModel.create(
    { 
      "name": "Brandon Sanderson", 
      "website" : "https://www.dragonsteelbooks.com"
    })
});
afterAll(async () => {
  await sequelize.drop(); // removes the tables we set up for our test environment
  await sequelize.close(); // close the Sequelize connection
});

describe('Testing the REST /author Router', () => {

  // Test CREATE
  test('Should CREATE author (/author)', async () => {
    let response = await request.post('/author').send({
      name: 'Brandon Sanderson',
      website: 'https://www.brandonsanderson.com/'
    });

    expect(response.status).toEqual(200);
    expect(response.body.name).toEqual('Brandon Sanderson');
  });

  // Test READ
  test('Should READ author (/author)', async () => {
    let response = await request.get('/author');

    expect(response.status).toEqual(200);
    expect(response.body.results).toBeTruthy();
  });

  // Test UPDATE
  test('Should UPDATE author (/author/1)', async () => {
    let response = await request.put('/author/1').send({
      name: 'Brandon Sanderson',
      flavor: 'https://www.dragonsteelbooks.com/'
    });

    expect(response.status).toEqual(200);
    expect(response.body.name).toEqual('Brandon Sanderson');
  });

  test('Should DELETE author (/author/1)', async () => {
    let response = await request.delete('/author/2');

    expect(response.status).toEqual(200);
  });

})

describe('Testing the REST /book Router', () => {

  // Test CREATE
  test('Should CREATE book (/book)', async () => {
    let response = await request.post('/book').send({
      name: 'The Final Empire',
      genre: 'Fantasy',
      authorId: testAuthor.id
    });

    expect(response.status).toEqual(200);
    expect(response.body.name).toEqual('The Final Empire');
  });

  // Test READ
  test('Should READ book (/book)', async () => {
    let response = await request.get('/book');

    expect(response.status).toEqual(200);
    expect(response.body.results).toBeTruthy();
  });

  // Test UPDATE
  test('Should UPDATE book (/book/1)', async () => {
    let response = await request.put('/book/1').send({
      name: 'The Final Empire',
      genre: 'Amazing',
      authorId: 1
    });

    expect(response.status).toEqual(200);
    expect(response.body.name).toEqual('The Final Empire');
  });

  test('Should DELETE book (/book/1)', async () => {
    let response = await request.delete('/book/1');

    expect(response.status).toEqual(200);
  });

})


describe('Testing the REST /food Router', () => {

  // Test CREATE
  test('Should CREATE food (/food)', async () => {
    let response = await request.post('/food').send({
      name: 'Chocolate',
      flavor: 'sweet'
    });

    expect(response.status).toEqual(200);
    expect(response.body.name).toEqual('Chocolate');
  });

  // Test READ
  test('Should READ food (/food)', async () => {
    let response = await request.get('/food');

    expect(response.status).toEqual(200);
    expect(response.body.results).toBeTruthy();
  });

  // Test UPDATE
  test('Should UPDATE food (/food/1)', async () => {
    let response = await request.put('/food/1').send({
      name: 'Chocolate',
      flavor: 'salty'
    });

    expect(response.status).toEqual(200);
    expect(response.body.name).toEqual('Chocolate');
  });

  test('Should DELETE food (/food/1)', async () => {
    let response = await request.delete('/food/1');

    expect(response.status).toEqual(200);
  });

})

describe('Testing the REST /clothes Router', () => {

  // Test CREATE
  test('Should CREATE clothes (/clothes)', async () => {
    let response = await request.post('/clothes').send({
      name: 'Chocolate',
      flavor: 'red'
    });

    expect(response.status).toEqual(200);
    expect(response.body.name).toEqual('Chocolate');
  });

  // Test READ
  test('Should READ clothes (/clothes)', async () => {
    let response = await request.get('/clothes');

    expect(response.status).toEqual(200);
    expect(response.body.results).toBeTruthy();
  });

  // Test UPDATE
  test('Should UPDATE clothes (/clothes/1)', async () => {
    let response = await request.put('/clothes/1').send({
      name: 'Chocolate',
      flavor: 'salty'
    });

    expect(response.status).toEqual(200);
    expect(response.body.name).toEqual('Chocolate');
  });

  test('Should DELETE clothes (/clothes/1)', async () => {
    let response = await request.delete('/clothes/1');

    expect(response.status).toEqual(200);
  });

})