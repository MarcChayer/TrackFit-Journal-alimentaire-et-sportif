// Express
const express = require('express');
const router = express.Router();

// controllers import
const userController = require('./controllers/userController');
const articlesController = require('./controllers/articlesController');
const dashboardController = require('./controllers/dashboardController');


// route primordiale

// routes articles :
router.get('/articles', articlesController.getAllArticles);
router.get('/articles/:label', articlesController.getArticlesByLabel);
router.get('/article/:label/:id', articlesController.getOneArticle);
router.delete('/article/:label/:id', articlesController.deleteArticle);

// routes users : 
router.post('/login', userController.loginAction);
router.post('/signup', userController.signupAction);
// routes lougout
router.post('/logout', userController.logoutAction);

// profil d'un utilisateur
router.get('/profile/:id', userController.getProfile);
// modification profil d'un utilisateur
router.patch('/profile/:id', userController.updateProfile);
// suppression du profil d'un utilisateur
router.delete('/profile/:id', userController.deleteProfile);

// route dashboard
router.get('/dashboard/:id', dashboardController.getAllInfos);
// Envoyer les données du tracker 
router.post('/dashboard/:id/sport', dashboardController.postDataSport);
// Envoyer les données du tracker 
router.post('/dashboard/:id/food', dashboardController.postDataFood);
// Envoyer les données du tracker 
router.post('/dashboard/:id/weight', dashboardController.postDataWeight);

router.get('/user/:user_id/article/:article_id', dashboardController.toggleFavArticle);
// // on ajoute les articles fav en bdd pour l'utilisateur ciblé
// router.post('/user/:user_id/article/:article_id', dashboardController.postAllArticleFav);

// // on ajoute les articles fav en bdd pour l'utilisateur ciblé
// router.delete('/user/:user_id/article/:article_id', dashboardController.removeArticleFromUser);

// Envoyer les données du tracker 
router.post('/dashboard/:id/water', dashboardController.postDataWater);
// Envoyer les données du tracker 
router.post('/dashboard/:id/sleep', dashboardController.postDataSleep);

// on envoie les nouvelles données du tracker task en bdd
router.get('/dashboard/:id/task', dashboardController.getAllTask);
// on envoie les nouvelles données du tracker task en bdd
router.post('/dashboard/:id/task', dashboardController.createTask);
// tracker task : supression d'une tâche
router.delete('/dashboard/:id/task/:id', dashboardController.deleteTask);
// on modifie les données d'une task
router.patch('/dashboard/:id/task/:id', dashboardController.updateTask);

// Export
module.exports = router;