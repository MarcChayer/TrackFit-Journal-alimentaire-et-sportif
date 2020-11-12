# Explication du back

On a defini nos tables et créé nos MCD
ORM sequelize pour relations entre les tables en créant des models
back : 2 gros fichiers importants
index.js où on met notre port / body parser et bcrypt
routes.js initialise toutes nos routes, reliés à des controllers et appellent des méthodes
fichier gé des models : relations entre les tables belongsToMany etc FK + alias
middlewares à supprimer
controllers getAllArticles resp.status 200 = requete bien passé
envoi au front
trim = verifier qu'il n'y a pas d'espace
session = express session envoi un cookie au front identifiant user