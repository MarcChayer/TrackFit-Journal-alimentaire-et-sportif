// route d'accueil
router.get('/', mainController.homeAction);

// Page de listing des articles
router.get('/articles', articlesController.detailArticles);
// Page de detail d'un article
router.get('/articles/:id', articlesController.detailArticle);

// liste article mis en favoris  ???????????????
router.get('/articles/:id', articlesController.favouriteArticle);
// liste article mis en favoris  ???????????????
router.post('/articles/:id', articlesController.favouriteArticle);
// supression d'un article mis en favoris  ???????????????
router.delete('/articles/:id', articlesController.favouriteArticle);


// tracker sport (on recup tte les infos pour les statistiques ?)
router.get('/sport', sportController.sportAction);
// tracker sport d'une seance 
router.get('/sport/:id', sportController.sportAction);
// on envoie les nouvelles données du tracker sport en bdd
router.post('/sport', sportController.sportAction);
// on modifie les données du tracker sport d'une seance (cote front ?)
router.patch('/sport/:id', sportController.sportAction);

// tracker food (on recup tte les infos pour les statistiques ?)
router.get('/food', foodController.foodAction);
// tracker food d'un repas
router.get('/food/:id', foodController.foodAction);
// on envoie les nouvelles données du tracker food en bdd
router.post('/food', foodController.foodAction);
// on modifie les données du tracker food d'un repas (cote front ?)
router.patch('/food/:id', foodController.foodAction);

// tracker sleep (on recup tte les infos pour les statistiques ?)
router.get('/sleep', sleepController.sleepAction);
// tracker sleep de la nuit precedente 
router.get('/sleep/:id', sleepController.sleepAction);
// on envoie les nouvelles données du tracker sleep en bdd
router.post('/sleep', sleepController.sleepAction);
// on modifie les données du tracker sleep de la nuit precedente(cote front ?)
router.patch('/sleep/:id', sleepController.sleepAction);

// tracker task (on recup tte les infos pour les statistiques ?)
router.get('/task', taskController.taskAction);

// on envoie les nouvelles données du tracker task en bdd
router.post('/task', taskController.taskAction);


// recuperation des données des trackers de l'utilisateur
router.get('/statistics', statisticsController.statisticsAction);