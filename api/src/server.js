/*
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'myproject';

// Use connect method to connect to the server
MongoClient.connect(url, function(err, client) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  const db = client.db(dbName);

  client.close();
});
*/

const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const { log } = require('./util/logger');

const port = 5000;

const setUpApp = functions => {
  const newApp = express();

  // Middleware
  newApp.use(bodyParser.json());

  Object.keys(functions).forEach(func => {
    log.always(`registered http://localhost:${port}/${func}`);

    newApp.get(`/${func}`, functions[func]);
  });
  return newApp;
};

// Create the Express app with all of the Cloud Function handlers
// and add it as a listner on our Cloud Function emulation server.
const myApp = setUpApp(require('../index.js'));

const server = http.createServer(myApp);
server.listen(port);
