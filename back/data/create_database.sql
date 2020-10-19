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
    "is_admin" BOOLEAN NOT NULL
);

--
-- Contenu de la table 'user'
--

INSERT INTO "user" ("id", "lastName", "firstName", "email", "birthdate", "gender", "weight", "imc", "height", "password", "is_admin") VALUES
(1, 'MAMP', 'PMAM', 'test@test.com', '20-04-90', 'male', '70', '23', '174', 'coucou123', 'true');

-- --------------------------------------------------------

--
-- Structure de la table 'article'
--

CREATE TABLE "article" (
    "id" SERIAL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "media" TEXT NOT NULL
);

--
-- Contenu de la table 'article'
--

INSERT INTO "article" ("id", "title", "content", "media") VALUES
(1, 'best article ever', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur obcaecati delectus nemo architecto ex, ullam vero non quia tenetur iure voluptates modi facilis quas incidunt numquam temporibus voluptatem corporis provident.
Doloremque perferendis sed magni doloribus autem ratione iste, deserunt itaque ex. Repudiandae et quibusdam commodi mollitia consequatur culpa cumque consectetur, maiores exercitationem sint esse ex placeat dignissimos delectus rem magnam.
Voluptatem commodi esse nihil quae ullam, non corrupti sint beatae, deleniti omnis, adipisci explicabo saepe. Cupiditate, fugiat voluptatum! Nostrum cumque blanditiis sapiente alias non ratione minus natus odio architecto sunt.
Necessitatibus ab architecto placeat molestias consequuntur obcaecati aperiam maiores ipsam animi voluptatibus veniam dolor, vitae quos explicabo quaerat laudantium similique, quam culpa natus exercitationem neque ex modi ipsa? Deserunt, eius?
Temporibus, voluptate? Optio ex, magnam ipsam quo rerum dolores maiores aliquam vel, aut accusamus commodi distinctio aperiam quibusdam ad accusantium excepturi dolore at, sapiente ab. Totam beatae sed error eaque.', 'https://cdn.pixabay.com/photo/2017/04/22/10/15/sport-2250970_960_720.jpg'),
(2, 'la folie du sport', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur obcaecati delectus nemo architecto ex, ullam vero non quia tenetur iure voluptates modi facilis quas incidunt numquam temporibus voluptatem corporis provident.
Doloremque perferendis sed magni doloribus autem ratione iste, deserunt itaque ex. Repudiandae et quibusdam commodi mollitia consequatur culpa cumque consectetur, maiores exercitationem sint esse ex placeat dignissimos delectus rem magnam.
Voluptatem commodi esse nihil quae ullam, non corrupti sint beatae, deleniti omnis, adipisci explicabo saepe. Cupiditate, fugiat voluptatum! Nostrum cumque blanditiis sapiente alias non ratione minus natus odio architecto sunt.
Necessitatibus ab architecto placeat molestias consequuntur obcaecati aperiam maiores ipsam animi voluptatibus veniam dolor, vitae quos explicabo quaerat laudantium similique, quam culpa natus exercitationem neque ex modi ipsa? Deserunt, eius?
Temporibus, voluptate? Optio ex, magnam ipsam quo rerum dolores maiores aliquam vel, aut accusamus commodi distinctio aperiam quibusdam ad accusantium excepturi dolore at, sapiente ab. Totam beatae sed error eaque.', 'https://cdn.pixabay.com/photo/2016/08/01/20/13/girl-1561989_960_720.jpg'),
(3, 'sport en folie', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur obcaecati delectus nemo architecto ex, ullam vero non quia tenetur iure voluptates modi facilis quas incidunt numquam temporibus voluptatem corporis provident.
Doloremque perferendis sed magni doloribus autem ratione iste, deserunt itaque ex. Repudiandae et quibusdam commodi mollitia consequatur culpa cumque consectetur, maiores exercitationem sint esse ex placeat dignissimos delectus rem magnam.
Voluptatem commodi esse nihil quae ullam, non corrupti sint beatae, deleniti omnis, adipisci explicabo saepe. Cupiditate, fugiat voluptatum! Nostrum cumque blanditiis sapiente alias non ratione minus natus odio architecto sunt.
Necessitatibus ab architecto placeat molestias consequuntur obcaecati aperiam maiores ipsam animi voluptatibus veniam dolor, vitae quos explicabo quaerat laudantium similique, quam culpa natus exercitationem neque ex modi ipsa? Deserunt, eius?
Temporibus, voluptate? Optio ex, magnam ipsam quo rerum dolores maiores aliquam vel, aut accusamus commodi distinctio aperiam quibusdam ad accusantium excepturi dolore at, sapiente ab. Totam beatae sed error eaque.', 'https://cdn.pixabay.com/photo/2015/03/01/22/27/relay-race-655353_960_720.jpg'),
(4, 'la bouffe : la vie', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur obcaecati delectus nemo architecto ex, ullam vero non quia tenetur iure voluptates modi facilis quas incidunt numquam temporibus voluptatem corporis provident.
Doloremque perferendis sed magni doloribus autem ratione iste, deserunt itaque ex. Repudiandae et quibusdam commodi mollitia consequatur culpa cumque consectetur, maiores exercitationem sint esse ex placeat dignissimos delectus rem magnam.
Voluptatem commodi esse nihil quae ullam, non corrupti sint beatae, deleniti omnis, adipisci explicabo saepe. Cupiditate, fugiat voluptatum! Nostrum cumque blanditiis sapiente alias non ratione minus natus odio architecto sunt.
Necessitatibus ab architecto placeat molestias consequuntur obcaecati aperiam maiores ipsam animi voluptatibus veniam dolor, vitae quos explicabo quaerat laudantium similique, quam culpa natus exercitationem neque ex modi ipsa? Deserunt, eius?
Temporibus, voluptate? Optio ex, magnam ipsam quo rerum dolores maiores aliquam vel, aut accusamus commodi distinctio aperiam quibusdam ad accusantium excepturi dolore at, sapiente ab. Totam beatae sed error eaque.', 'https://cdn.pixabay.com/photo/2014/11/05/15/57/salmon-518032_960_720.jpg'),
(5, 'Manger : la base', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur obcaecati delectus nemo architecto ex, ullam vero non quia tenetur iure voluptates modi facilis quas incidunt numquam temporibus voluptatem corporis provident.
Doloremque perferendis sed magni doloribus autem ratione iste, deserunt itaque ex. Repudiandae et quibusdam commodi mollitia consequatur culpa cumque consectetur, maiores exercitationem sint esse ex placeat dignissimos delectus rem magnam.
Voluptatem commodi esse nihil quae ullam, non corrupti sint beatae, deleniti omnis, adipisci explicabo saepe. Cupiditate, fugiat voluptatum! Nostrum cumque blanditiis sapiente alias non ratione minus natus odio architecto sunt.
Necessitatibus ab architecto placeat molestias consequuntur obcaecati aperiam maiores ipsam animi voluptatibus veniam dolor, vitae quos explicabo quaerat laudantium similique, quam culpa natus exercitationem neque ex modi ipsa? Deserunt, eius?
Temporibus, voluptate? Optio ex, magnam ipsam quo rerum dolores maiores aliquam vel, aut accusamus commodi distinctio aperiam quibusdam ad accusantium excepturi dolore at, sapiente ab. Totam beatae sed error eaque.', 'https://cdn.pixabay.com/photo/2017/09/22/19/05/casserole-dish-2776735_960_720.jpg'),
(6, 'Manger oui, mais manger quoi ?', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur obcaecati delectus nemo architecto ex, ullam vero non quia tenetur iure voluptates modi facilis quas incidunt numquam temporibus voluptatem corporis provident.
Doloremque perferendis sed magni doloribus autem ratione iste, deserunt itaque ex. Repudiandae et quibusdam commodi mollitia consequatur culpa cumque consectetur, maiores exercitationem sint esse ex placeat dignissimos delectus rem magnam.
Voluptatem commodi esse nihil quae ullam, non corrupti sint beatae, deleniti omnis, adipisci explicabo saepe. Cupiditate, fugiat voluptatum! Nostrum cumque blanditiis sapiente alias non ratione minus natus odio architecto sunt.
Necessitatibus ab architecto placeat molestias consequuntur obcaecati aperiam maiores ipsam animi voluptatibus veniam dolor, vitae quos explicabo quaerat laudantium similique, quam culpa natus exercitationem neque ex modi ipsa? Deserunt, eius?
Temporibus, voluptate? Optio ex, magnam ipsam quo rerum dolores maiores aliquam vel, aut accusamus commodi distinctio aperiam quibusdam ad accusantium excepturi dolore at, sapiente ab. Totam beatae sed error eaque.', 'https://cdn.pixabay.com/photo/2015/03/26/09/42/breakfast-690128_960_720.jpg'),
(7, 'Le yoga : la vie', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur obcaecati delectus nemo architecto ex, ullam vero non quia tenetur iure voluptates modi facilis quas incidunt numquam temporibus voluptatem corporis provident.
Doloremque perferendis sed magni doloribus autem ratione iste, deserunt itaque ex. Repudiandae et quibusdam commodi mollitia consequatur culpa cumque consectetur, maiores exercitationem sint esse ex placeat dignissimos delectus rem magnam.
Voluptatem commodi esse nihil quae ullam, non corrupti sint beatae, deleniti omnis, adipisci explicabo saepe. Cupiditate, fugiat voluptatum! Nostrum cumque blanditiis sapiente alias non ratione minus natus odio architecto sunt.
Necessitatibus ab architecto placeat molestias consequuntur obcaecati aperiam maiores ipsam animi voluptatibus veniam dolor, vitae quos explicabo quaerat laudantium similique, quam culpa natus exercitationem neque ex modi ipsa? Deserunt, eius?
Temporibus, voluptate? Optio ex, magnam ipsam quo rerum dolores maiores aliquam vel, aut accusamus commodi distinctio aperiam quibusdam ad accusantium excepturi dolore at, sapiente ab. Totam beatae sed error eaque.', 'https://cdn.pixabay.com/photo/2017/03/26/21/54/yoga-2176668_960_720.jpg'),
(8, 'lifestyle, il le faut savoir', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur obcaecati delectus nemo architecto ex, ullam vero non quia tenetur iure voluptates modi facilis quas incidunt numquam temporibus voluptatem corporis provident.
Doloremque perferendis sed magni doloribus autem ratione iste, deserunt itaque ex. Repudiandae et quibusdam commodi mollitia consequatur culpa cumque consectetur, maiores exercitationem sint esse ex placeat dignissimos delectus rem magnam.
Voluptatem commodi esse nihil quae ullam, non corrupti sint beatae, deleniti omnis, adipisci explicabo saepe. Cupiditate, fugiat voluptatum! Nostrum cumque blanditiis sapiente alias non ratione minus natus odio architecto sunt.
Necessitatibus ab architecto placeat molestias consequuntur obcaecati aperiam maiores ipsam animi voluptatibus veniam dolor, vitae quos explicabo quaerat laudantium similique, quam culpa natus exercitationem neque ex modi ipsa? Deserunt, eius?
Temporibus, voluptate? Optio ex, magnam ipsam quo rerum dolores maiores aliquam vel, aut accusamus commodi distinctio aperiam quibusdam ad accusantium excepturi dolore at, sapiente ab. Totam beatae sed error eaque.', 'https://cdn.pixabay.com/photo/2016/07/11/15/43/pretty-woman-1509956_960_720.jpg'),
(9, 'Savoir vivre', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur obcaecati delectus nemo architecto ex, ullam vero non quia tenetur iure voluptates modi facilis quas incidunt numquam temporibus voluptatem corporis provident.
Doloremque perferendis sed magni doloribus autem ratione iste, deserunt itaque ex. Repudiandae et quibusdam commodi mollitia consequatur culpa cumque consectetur, maiores exercitationem sint esse ex placeat dignissimos delectus rem magnam.
Voluptatem commodi esse nihil quae ullam, non corrupti sint beatae, deleniti omnis, adipisci explicabo saepe. Cupiditate, fugiat voluptatum! Nostrum cumque blanditiis sapiente alias non ratione minus natus odio architecto sunt.
Necessitatibus ab architecto placeat molestias consequuntur obcaecati aperiam maiores ipsam animi voluptatibus veniam dolor, vitae quos explicabo quaerat laudantium similique, quam culpa natus exercitationem neque ex modi ipsa? Deserunt, eius?
Temporibus, voluptate? Optio ex, magnam ipsam quo rerum dolores maiores aliquam vel, aut accusamus commodi distinctio aperiam quibusdam ad accusantium excepturi dolore at, sapiente ab. Totam beatae sed error eaque.', 'https://cdn.pixabay.com/photo/2015/04/20/13/10/person-731142_960_720.jpg');

-- --------------------------------------------------------

--
-- Structure de la table 'favorite_article'
--

CREATE TABLE "favorite_article" (
    "user_id" INTEGER REFERENCES "user"("id") NOT NULL,
    "article_id" INTEGER REFERENCES "article"("id") NOT NULL
);

--
-- Contenu de la table 'favorite_article'
--

INSERT INTO "favorite_article" ("user_id", "article_id") VALUES
(1,1),
(1,4),
(1,5);

-- --------------------------------------------------------

--
-- Structure de la table 'food'
--

CREATE TABLE "food" (
    "id" SERIAL PRIMARY KEY,
    "user_id" INTEGER REFERENCES "user"("id") NOT NULL,
    "date" TIMESTAMP NOT NULL,
    "meal" TEXT NOT NULL,
    "water" INTEGER NOT NULL,
    "emotion" TEXT NOT NULL
);

--
-- Contenu de la table 'food'
--

INSERT INTO "food" ("id", "user_id", "date", "meal", "water", "emotion") VALUES
(1, 1, '15-10-20','burger', '2', 'happy');

-- --------------------------------------------------------

--
-- Structure de la table 'sleep'
--

CREATE TABLE "sleep" (
    "id" SERIAL PRIMARY KEY,
    "user_id" INTEGER REFERENCES "user"("id") NOT NULL,
    "date" TIMESTAMP NOT NULL,
    "bedTime" TIME NOT NULL,
    "wakeUpTime" TIME NOT NULL
);

--
-- Contenu de la table 'sleep'
--

INSERT INTO "sleep" ("id", "user_id", "date", "bedTime", "wakeUpTime") VALUES
(1, 1, '15-10-20','12:00', '07:00');

-- --------------------------------------------------------

--
-- Structure de la table 'sport'
--

CREATE TABLE "sport" (
    "id" SERIAL PRIMARY KEY,
    "user_id" INTEGER REFERENCES "user"("id") NOT NULL,
    "date" TIMESTAMP NOT NULL,
    "workout" TEXT NOT NULL,
    "duration" INTEGER NOT NULL,
    "intensity" TEXT NOT NULL,
    "emotion" TEXT NOT NULL
);

--
-- Contenu de la table 'sport'
--

INSERT INTO "sport" ("id", "user_id", "date", "workout", "duration", "intensity", "emotion") VALUES
(1, 1, '15-10-20','escalade','60', '4', 'happy');

-- --------------------------------------------------------

--
-- Structure de la table 'task'
--

CREATE TABLE "task" (
    "id" SERIAL PRIMARY KEY,
    "user_id" INTEGER REFERENCES "user"("id") NOT NULL,
    "title" TEXT NOT NULL
);


--
-- Contenu de la table 'task'
--

INSERT INTO "task" ("id", "user_id", "title") VALUES
(1, 1, 'reussir ce putain de projet');


COMMIT;