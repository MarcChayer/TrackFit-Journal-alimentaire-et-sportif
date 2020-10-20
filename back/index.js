require('dotenv').config();
// Express
const express = require('express');
const app = express();
// router
const router = require('./app/router');

const PORT = process.env.PORT || 5050;

// Initialisation de la lecture de paramètre post ( création de req.body )
app.use(express.urlencoded({ extended: true }));

app.use(router);

// launch server
app.listen( PORT,  () => {
    console.log(`Listening on ${PORT}`);
});