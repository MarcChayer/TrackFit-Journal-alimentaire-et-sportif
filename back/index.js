require('dotenv').config();
const userMiddleware = require('./app/middlewares/userMiddleware');
// Express
const express = require('express');
const session = require('express-session');
const app = express();
// router
const router = require('./app/router');

const PORT = process.env.PORT || 5050;

// Initialisation de la lecture de paramètre post ( création de req.body )
app.use(express.urlencoded({ extended: true }));

// Initialisation des sessions
app.use(
	session({
        // Un mot de passe qui sert à encoder le session_id
        secret: 'monsupersecret', 
        // Force à sauvegarder dans l'espace de stockage des sessions même si la session n'a pas été modifiée
        resave: true, 
        // Force à sauvegarder dans l'espace de stockage des sessions même si la session n'a pas initialisée
		saveUninitialized: true, 
		cookie: {
            maxAge: 12 * 30 * 24 * 60 * 60 * 1000
		},
	}),
);

// Ici on utilise notre custom user middleware afin de remplir la variable locals.connected_user
app.use(userMiddleware);

app.use(router);

// launch server
app.listen( PORT,  () => {
    console.log(`Listening on ${PORT}`);
});