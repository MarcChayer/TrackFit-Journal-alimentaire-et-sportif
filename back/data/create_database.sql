BEGIN TRANSACTION;

-- on commence par détruire toutes les tables si elles existent
DROP TABLE IF EXISTS "user", "weight", "article", "favorite_article", "food", "food_type", "water", "sleep", "sport", "sport_type", "task" CASCADE;

-- création des tables
CREATE TABLE "user" (
    "id" INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    "lastName" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "birthdate" DATE,
    "gender" TEXT,
    "height" INTEGER,
    "estimatedSleepTime" INTEGER,
    "password" TEXT NOT NULL,
    "is_admin" BOOLEAN NOT NULL DEFAULT FALSE
);

-- la table 'user'
CREATE TABLE "weight" (
    "id" SERIAL PRIMARY KEY,
    "user_id" INTEGER REFERENCES "user"("id") NOT NULL,
    "date" TIMESTAMP NOT NULL,
    "weight" INTEGER,
    "imc" INTEGER
);

--
-- Structure de la table 'article'
--

CREATE TABLE "article" (
    "id" SERIAL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "media" TEXT NOT NULL,
    "label" TEXT NOT NULL
);

--
-- Structure de la table 'favorite_article'
--

CREATE TABLE "favorite_article" (
    "user_id" INTEGER REFERENCES "user"("id") NOT NULL,
    "article_id" INTEGER REFERENCES "article"("id") NOT NULL
);



--
-- Structure de la table 'aliment_type'
--

CREATE TABLE "food_type" (
    "id" INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    "name" TEXT NOT NULL,
    "value" TEXT NOT NULL
);

--
-- Structure de la table 'food'
--

CREATE TABLE "food" (
    "id" SERIAL PRIMARY KEY,
    "user_id" INTEGER REFERENCES "user"("id") NOT NULL,
    "food_type_id" INTEGER REFERENCES "food_type"("id") NOT NULL,
    "date" TIMESTAMP NOT NULL,
    "meal" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "calory" INTEGER,
    "emotion" TEXT
);

-- la table 'water'
CREATE TABLE "water" (
    "id" SERIAL PRIMARY KEY,
    "user_id" INTEGER REFERENCES "user"("id") NOT NULL,
    "date" TIMESTAMP NOT NULL,
    "water" INTEGER
);

--
-- Structure de la table 'sleep'
--

CREATE TABLE "sleep" (
    "id" SERIAL PRIMARY KEY,
    "user_id" INTEGER REFERENCES "user"("id") NOT NULL,
    "date" DATE NOT NULL,
    "bedTime" TIME NOT NULL,
    "wakeUpTime" TIME NOT NULL
);

--
-- Structure de la table 'sport_type'
--

CREATE TABLE "sport_type" (
    "id" INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    "name" TEXT NOT NULL,
    "value" TEXT NOT NULL
);


--
-- Structure de la table 'sport'
--

CREATE TABLE "sport" (
    "id" SERIAL PRIMARY KEY,
    "user_id" INTEGER REFERENCES "user"("id") NOT NULL,
    "sport_type_id" INTEGER REFERENCES "sport_type"("id") NOT NULL,
    "date" TIMESTAMP NOT NULL,
    "workout" TEXT NOT NULL,
    "duration" INTEGER NOT NULL,
    "intensity" TEXT NOT NULL,
    "emotion" TEXT
);

--
-- Structure de la table 'task'
--

CREATE TABLE "task" (
    "id" SERIAL PRIMARY KEY,
    "user_id" INTEGER REFERENCES "user"("id") NOT NULL,
    "title" TEXT NOT NULL
);

COMMIT;