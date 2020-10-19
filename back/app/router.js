// Express
const express = require('express');
const router = express.Router();

const userController = require('./controllers/userController');
// controllers import

// route primordiale

// routes articles :
// router.get('/articles/:label', articlesController.getArticlesByLabel);
// router.get('/article/:id', articlesController.getOneArticle);
// router.delete('/article/:id', articlesController.deleteArticle);

// routes users : 
// // router.get('/login', userController.renderLogin);
// router.post('/login', userController.loginAction);
// router.get('/signup', userController.renderSignup);
router.post('/signup', userController.signupAction);

// // profil d'un utilisateur
// router.get('/profile/:id', userController.getProfile);
// // modification profil d'un utilisateur
// router.patch('/profile/:id', userController.updateProfile);
// // suppression du profil d'un utilisateur
// router.delete('/profile/:id', userController.deleteProfile);

// // route dashboard
// router.get('/dashboard/:id', dashboardController.getAllInfos);
// // Envoyer les données du tracker 
// router.post('/dashboard/:id/sport', dashboardController.postDataSport);
// // Envoyer les données du tracker 
// router.post('/dashboard/:id/food', dashboardController.postDataFood);
// // Envoyer les données du tracker 
// router.post('/dashboard/:id/weight', dashboardController.postDataWeight);
// // Envoyer les données du tracker 
// router.post('/dashboard/:id/water', dashboardController.postDataWater);
// // Envoyer les données du tracker 
// router.post('/dashboard/:id/sleep', dashboardController.postDataSleep);

// // on envoie les nouvelles données du tracker task en bdd
// router.post('/task', taskController.createTask);
// // tracker task : supression d'une tâche
// router.delete('/task/:id', taskController.deleteTask);
// // on modifie les données d'une task
// router.patch('/task/:id', taskController.patchTask);

// Export
module.exports = router;