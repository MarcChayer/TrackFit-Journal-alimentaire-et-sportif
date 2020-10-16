BEGIN TRANSACTION;

-- on commence par détruire toutes les tables si elles existent
DROP TABLE IF EXISTS "user", "article", "favorite_article", "food", "sleep", "sport", "task";

-- création des tables
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "lastName" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "birthdate" DATE NOT NULL,
    "gender" TEXT NOT NULL,
    "weight" INTEGER NOT NULL,
    "imc" INTEGER NOT NULL,
    "height" INTEGER NOT NULL,
    "password" TEXT NOT NULL,
    "is_admin" BOOLEAN NOT NULL,
)

--
-- Contenu de la table 'user'
--

INSERT INTO "user" ("id", "lastName", "firstName", "email", "birthdate", "gender", "weight", "imc", "height", "password", "is_admin") VALUES
(1, 'MAMP', 'PMAM', 'test@test.com', '20-04-90', '?', '70', '23', '174', 'coucou123', 'true');

-- --------------------------------------------------------

--
-- Structure de la table 'article'
--

CREATE TABLE "article" (
    "id" SERIAL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "media" TEXT NOT NULL,
    "excerpt" TEXT NOT NULL,
    "label" TEXT NOT NULL,
)

--
-- Contenu de la table 'article'
--

INSERT INTO "article" ("id", "title", "content", "media", "excerpt", "label") VALUES
(1, 'best article ever', 'lipsumbalblablalblalblalbal', 'lien', '20-04-90', '?', '70', '23', '174', 'coucou123', 'true');

-- --------------------------------------------------------

--
-- Structure de la table 'favorite_article'
--

CREATE TABLE "favorite_article" (
    "user_id" INTEGER REFERENCES "user"("id") NOT NULL,
    "article_id" INTEGER REFERENCES "article"("id") NOT NULL,
)

--
-- Contenu de la table 'favorite_article'
--

INSERT INTO "favorite_article" ("user_id", "article_id") VALUES
(1,1);

-- --------------------------------------------------------

--
-- Structure de la table 'food'
--

CREATE TABLE "food" (
    "id" SERIAL PRIMARY KEY,
    "date" TIMESTAMP NOT NULL,
    "meal" TEXT NOT NULL,
    "water" INTEGER NOT NULL,
    "emotion" TEXT NOT NULL,
)

--
-- Contenu de la table 'food'
--

INSERT INTO "food" ("id", "date", "meal", "water", "emotion") VALUES
(1,'15-10-20','????', 'water', 'happy');

-- --------------------------------------------------------

--
-- Structure de la table 'sleep'
--

CREATE TABLE "sleep" (
    "id" SERIAL PRIMARY KEY,
    "date" TIMESTAMP NOT NULL,
    "bedTime" TIME NOT NULL,
    "wakeUpTime" TIME NOT NULL,
)

--
-- Contenu de la table 'sleep'
--

INSERT INTO "sleep" ("id", "date", "bedTime", "wakeUpTime") VALUES
(1,'15-10-20','12-00', '07-00');

-- --------------------------------------------------------

--
-- Structure de la table 'sport'
--

CREATE TABLE "sport" (
    "id" SERIAL PRIMARY KEY,
    "workout" TEXT NOT NULL,
    "duration" INTEGER NOT NULL,
    "intensity" TEXT NOT NULL,
    "emotion" TEXT NOT NULL,
)

--
-- Contenu de la table 'sport'
--

INSERT INTO "sport" ("id", "workout", "duration", "intensity", "emotion") VALUES
(1,'escalade','60', '4', 'happy');

-- --------------------------------------------------------

--
-- Structure de la table 'task'
--

CREATE TABLE "task" (
    "id" SERIAL PRIMARY KEY,
    "title" TEXT NOT NULL,
)

--
-- Contenu de la table 'task'
--

INSERT INTO "task" ("id", "title") VALUES
(1,'reussir ce putain de projet');

-- --------------------------------------------------------