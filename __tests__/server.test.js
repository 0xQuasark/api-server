'use strict';

const supertest = require('supertest');
const server = require('../src/server.js');
const { sequelize } = require('../src/models/');
const request = supertest(server.app);

// built in jest function, setup our test suite
beforeAll(async () => {
  await sequelize.sync(); // sets up our tables before tests run
});
afterAll(async () => {
  await sequelize.drop(); // removes the tables we set up for our test environment
  await sequelize.close(); // close the Sequelize connection
});

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