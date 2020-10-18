// Express
const express = require('express');
const app = express();

const PORT = process.env.PORT || 5050;

// router
const router = require('./app/router');
app.use(router);

// launch server
app.listen( PORT,  () => {
    console.log(`Listening on ${PORT}`);
  });