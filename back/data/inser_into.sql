BEGIN;
--
-- Contenu de la table 'user'
--

INSERT INTO "user" ("lastName", "firstName", "email", "birthdate", "gender", "height", "estimatedSleepTime", "password", "is_admin") VALUES
('MAMP', 'PMAM', 'test@test.com', '1990-04-20', 'male', '174', '7', 'coucou123', 'true'),
('jon', 'doe', 'blabla@test.com', '1990-05-25', 'male', '173', '5', 'salut123', 'false');

-- --------------------------------------------------------

--
-- Contenu de la table 'weight'
--

INSERT INTO "weight" ("id", "user_id", "date", "weight", "imc") VALUES
(1, 1, '2020-09-28 07:00:00', '70', '23'),
(2, 2, '2020-09-10 01:00:00', '68', '22');

-- --------------------------------------------------------

--
-- Contenu de la table 'article'
--

INSERT INTO "article" ("id", "title", "content", "media", "label") VALUES
(1, 'best article ever', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur obcaecati delectus nemo architecto ex, ullam vero non quia tenetur iure voluptates modi facilis quas incidunt numquam temporibus voluptatem corporis provident.
Doloremque perferendis sed magni doloribus autem ratione iste, deserunt itaque ex. Repudiandae et quibusdam commodi mollitia consequatur culpa cumque consectetur, maiores exercitationem sint esse ex placeat dignissimos delectus rem magnam.
Voluptatem commodi esse nihil quae ullam, non corrupti sint beatae, deleniti omnis, adipisci explicabo saepe. Cupiditate, fugiat voluptatum! Nostrum cumque blanditiis sapiente alias non ratione minus natus odio architecto sunt.
Necessitatibus ab architecto placeat molestias consequuntur obcaecati aperiam maiores ipsam animi voluptatibus veniam dolor, vitae quos explicabo quaerat laudantium similique, quam culpa natus exercitationem neque ex modi ipsa? Deserunt, eius?
Temporibus, voluptate? Optio ex, magnam ipsam quo rerum dolores maiores aliquam vel, aut accusamus commodi distinctio aperiam quibusdam ad accusantium excepturi dolore at, sapiente ab. Totam beatae sed error eaque.', 'https://cdn.pixabay.com/photo/2017/04/22/10/15/sport-2250970_960_720.jpg', 'alimentation'),
(2, 'la folie du sport', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur obcaecati delectus nemo architecto ex, ullam vero non quia tenetur iure voluptates modi facilis quas incidunt numquam temporibus voluptatem corporis provident.
Doloremque perferendis sed magni doloribus autem ratione iste, deserunt itaque ex. Repudiandae et quibusdam commodi mollitia consequatur culpa cumque consectetur, maiores exercitationem sint esse ex placeat dignissimos delectus rem magnam.
Voluptatem commodi esse nihil quae ullam, non corrupti sint beatae, deleniti omnis, adipisci explicabo saepe. Cupiditate, fugiat voluptatum! Nostrum cumque blanditiis sapiente alias non ratione minus natus odio architecto sunt.
Necessitatibus ab architecto placeat molestias consequuntur obcaecati aperiam maiores ipsam animi voluptatibus veniam dolor, vitae quos explicabo quaerat laudantium similique, quam culpa natus exercitationem neque ex modi ipsa? Deserunt, eius?
Temporibus, voluptate? Optio ex, magnam ipsam quo rerum dolores maiores aliquam vel, aut accusamus commodi distinctio aperiam quibusdam ad accusantium excepturi dolore at, sapiente ab. Totam beatae sed error eaque.', 'https://cdn.pixabay.com/photo/2016/08/01/20/13/girl-1561989_960_720.jpg', 'alimentation'),
(3, 'sport en folie', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur obcaecati delectus nemo architecto ex, ullam vero non quia tenetur iure voluptates modi facilis quas incidunt numquam temporibus voluptatem corporis provident.
Doloremque perferendis sed magni doloribus autem ratione iste, deserunt itaque ex. Repudiandae et quibusdam commodi mollitia consequatur culpa cumque consectetur, maiores exercitationem sint esse ex placeat dignissimos delectus rem magnam.
Voluptatem commodi esse nihil quae ullam, non corrupti sint beatae, deleniti omnis, adipisci explicabo saepe. Cupiditate, fugiat voluptatum! Nostrum cumque blanditiis sapiente alias non ratione minus natus odio architecto sunt.
Necessitatibus ab architecto placeat molestias consequuntur obcaecati aperiam maiores ipsam animi voluptatibus veniam dolor, vitae quos explicabo quaerat laudantium similique, quam culpa natus exercitationem neque ex modi ipsa? Deserunt, eius?
Temporibus, voluptate? Optio ex, magnam ipsam quo rerum dolores maiores aliquam vel, aut accusamus commodi distinctio aperiam quibusdam ad accusantium excepturi dolore at, sapiente ab. Totam beatae sed error eaque.', 'https://cdn.pixabay.com/photo/2015/03/01/22/27/relay-race-655353_960_720.jpg', 'bien-etre'),
(4, 'la bouffe : la vie', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur obcaecati delectus nemo architecto ex, ullam vero non quia tenetur iure voluptates modi facilis quas incidunt numquam temporibus voluptatem corporis provident.
Doloremque perferendis sed magni doloribus autem ratione iste, deserunt itaque ex. Repudiandae et quibusdam commodi mollitia consequatur culpa cumque consectetur, maiores exercitationem sint esse ex placeat dignissimos delectus rem magnam.
Voluptatem commodi esse nihil quae ullam, non corrupti sint beatae, deleniti omnis, adipisci explicabo saepe. Cupiditate, fugiat voluptatum! Nostrum cumque blanditiis sapiente alias non ratione minus natus odio architecto sunt.
Necessitatibus ab architecto placeat molestias consequuntur obcaecati aperiam maiores ipsam animi voluptatibus veniam dolor, vitae quos explicabo quaerat laudantium similique, quam culpa natus exercitationem neque ex modi ipsa? Deserunt, eius?
Temporibus, voluptate? Optio ex, magnam ipsam quo rerum dolores maiores aliquam vel, aut accusamus commodi distinctio aperiam quibusdam ad accusantium excepturi dolore at, sapiente ab. Totam beatae sed error eaque.', 'https://cdn.pixabay.com/photo/2014/11/05/15/57/salmon-518032_960_720.jpg', 'alimentation'),
(5, 'Manger : la base', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur obcaecati delectus nemo architecto ex, ullam vero non quia tenetur iure voluptates modi facilis quas incidunt numquam temporibus voluptatem corporis provident.
Doloremque perferendis sed magni doloribus autem ratione iste, deserunt itaque ex. Repudiandae et quibusdam commodi mollitia consequatur culpa cumque consectetur, maiores exercitationem sint esse ex placeat dignissimos delectus rem magnam.
Voluptatem commodi esse nihil quae ullam, non corrupti sint beatae, deleniti omnis, adipisci explicabo saepe. Cupiditate, fugiat voluptatum! Nostrum cumque blanditiis sapiente alias non ratione minus natus odio architecto sunt.
Necessitatibus ab architecto placeat molestias consequuntur obcaecati aperiam maiores ipsam animi voluptatibus veniam dolor, vitae quos explicabo quaerat laudantium similique, quam culpa natus exercitationem neque ex modi ipsa? Deserunt, eius?
Temporibus, voluptate? Optio ex, magnam ipsam quo rerum dolores maiores aliquam vel, aut accusamus commodi distinctio aperiam quibusdam ad accusantium excepturi dolore at, sapiente ab. Totam beatae sed error eaque.', 'https://cdn.pixabay.com/photo/2017/09/22/19/05/casserole-dish-2776735_960_720.jpg', 'bien-etre'),
(6, 'Manger oui, mais manger quoi ?', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur obcaecati delectus nemo architecto ex, ullam vero non quia tenetur iure voluptates modi facilis quas incidunt numquam temporibus voluptatem corporis provident.
Doloremque perferendis sed magni doloribus autem ratione iste, deserunt itaque ex. Repudiandae et quibusdam commodi mollitia consequatur culpa cumque consectetur, maiores exercitationem sint esse ex placeat dignissimos delectus rem magnam.
Voluptatem commodi esse nihil quae ullam, non corrupti sint beatae, deleniti omnis, adipisci explicabo saepe. Cupiditate, fugiat voluptatum! Nostrum cumque blanditiis sapiente alias non ratione minus natus odio architecto sunt.
Necessitatibus ab architecto placeat molestias consequuntur obcaecati aperiam maiores ipsam animi voluptatibus veniam dolor, vitae quos explicabo quaerat laudantium similique, quam culpa natus exercitationem neque ex modi ipsa? Deserunt, eius?
Temporibus, voluptate? Optio ex, magnam ipsam quo rerum dolores maiores aliquam vel, aut accusamus commodi distinctio aperiam quibusdam ad accusantium excepturi dolore at, sapiente ab. Totam beatae sed error eaque.', 'https://cdn.pixabay.com/photo/2015/03/26/09/42/breakfast-690128_960_720.jpg', 'sport'),
(7, 'Le yoga : la vie', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur obcaecati delectus nemo architecto ex, ullam vero non quia tenetur iure voluptates modi facilis quas incidunt numquam temporibus voluptatem corporis provident.
Doloremque perferendis sed magni doloribus autem ratione iste, deserunt itaque ex. Repudiandae et quibusdam commodi mollitia consequatur culpa cumque consectetur, maiores exercitationem sint esse ex placeat dignissimos delectus rem magnam.
Voluptatem commodi esse nihil quae ullam, non corrupti sint beatae, deleniti omnis, adipisci explicabo saepe. Cupiditate, fugiat voluptatum! Nostrum cumque blanditiis sapiente alias non ratione minus natus odio architecto sunt.
Necessitatibus ab architecto placeat molestias consequuntur obcaecati aperiam maiores ipsam animi voluptatibus veniam dolor, vitae quos explicabo quaerat laudantium similique, quam culpa natus exercitationem neque ex modi ipsa? Deserunt, eius?
Temporibus, voluptate? Optio ex, magnam ipsam quo rerum dolores maiores aliquam vel, aut accusamus commodi distinctio aperiam quibusdam ad accusantium excepturi dolore at, sapiente ab. Totam beatae sed error eaque.', 'https://cdn.pixabay.com/photo/2017/03/26/21/54/yoga-2176668_960_720.jpg', 'sport'),
(8, 'lifestyle, il le faut savoir', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur obcaecati delectus nemo architecto ex, ullam vero non quia tenetur iure voluptates modi facilis quas incidunt numquam temporibus voluptatem corporis provident.
Doloremque perferendis sed magni doloribus autem ratione iste, deserunt itaque ex. Repudiandae et quibusdam commodi mollitia consequatur culpa cumque consectetur, maiores exercitationem sint esse ex placeat dignissimos delectus rem magnam.
Voluptatem commodi esse nihil quae ullam, non corrupti sint beatae, deleniti omnis, adipisci explicabo saepe. Cupiditate, fugiat voluptatum! Nostrum cumque blanditiis sapiente alias non ratione minus natus odio architecto sunt.
Necessitatibus ab architecto placeat molestias consequuntur obcaecati aperiam maiores ipsam animi voluptatibus veniam dolor, vitae quos explicabo quaerat laudantium similique, quam culpa natus exercitationem neque ex modi ipsa? Deserunt, eius?
Temporibus, voluptate? Optio ex, magnam ipsam quo rerum dolores maiores aliquam vel, aut accusamus commodi distinctio aperiam quibusdam ad accusantium excepturi dolore at, sapiente ab. Totam beatae sed error eaque.', 'https://cdn.pixabay.com/photo/2016/07/11/15/43/pretty-woman-1509956_960_720.jpg', 'sport'),
(9, 'Savoir vivre', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur obcaecati delectus nemo architecto ex, ullam vero non quia tenetur iure voluptates modi facilis quas incidunt numquam temporibus voluptatem corporis provident.
Doloremque perferendis sed magni doloribus autem ratione iste, deserunt itaque ex. Repudiandae et quibusdam commodi mollitia consequatur culpa cumque consectetur, maiores exercitationem sint esse ex placeat dignissimos delectus rem magnam.
Voluptatem commodi esse nihil quae ullam, non corrupti sint beatae, deleniti omnis, adipisci explicabo saepe. Cupiditate, fugiat voluptatum! Nostrum cumque blanditiis sapiente alias non ratione minus natus odio architecto sunt.
Necessitatibus ab architecto placeat molestias consequuntur obcaecati aperiam maiores ipsam animi voluptatibus veniam dolor, vitae quos explicabo quaerat laudantium similique, quam culpa natus exercitationem neque ex modi ipsa? Deserunt, eius?
Temporibus, voluptate? Optio ex, magnam ipsam quo rerum dolores maiores aliquam vel, aut accusamus commodi distinctio aperiam quibusdam ad accusantium excepturi dolore at, sapiente ab. Totam beatae sed error eaque.', 'https://cdn.pixabay.com/photo/2015/04/20/13/10/person-731142_960_720.jpg', 'sport');

-- --------------------------------------------------------

--
-- Contenu de la table 'favorite_article'
--

INSERT INTO "favorite_article" ("user_id", "article_id") VALUES
(1,1),
(1,4),
(1,5);

-- --------------------------------------------------------

--
-- Contenu de la table 'aliment_type'
--

INSERT INTO aliment_type(name,value) VALUES ('Abricot',43);
INSERT INTO aliment_type(name,value) VALUES ('Ananas',55);
INSERT INTO aliment_type(name,value) VALUES ('Banane',88);
INSERT INTO aliment_type(name,value) VALUES ('Canneberges',46);
INSERT INTO aliment_type(name,value) VALUES ('Cerises',50);
INSERT INTO aliment_type(name,value) VALUES ('Citron',35);
INSERT INTO aliment_type(name,value) VALUES ('Coing',38);
INSERT INTO aliment_type(name,value) VALUES ('Cynorrhodon',162);
INSERT INTO aliment_type(name,value) VALUES ('Figue',107);
INSERT INTO aliment_type(name,value) VALUES ('Fraises',32);
INSERT INTO aliment_type(name,value) VALUES ('Framboises',36);
INSERT INTO aliment_type(name,value) VALUES ('Fruit de la passion',97);
INSERT INTO aliment_type(name,value) VALUES ('Gingembre',80);
INSERT INTO aliment_type(name,value) VALUES ('Grenade',74);
INSERT INTO aliment_type(name,value) VALUES ('Kiwi',51);
INSERT INTO aliment_type(name,value) VALUES ('Litchi',66);
INSERT INTO aliment_type(name,value) VALUES ('Mandarine',50);
INSERT INTO aliment_type(name,value) VALUES ('Mangue',62);
INSERT INTO aliment_type(name,value) VALUES ('Melon jaune',54);
INSERT INTO aliment_type(name,value) VALUES ('Mûres',43);
INSERT INTO aliment_type(name,value) VALUES ('Myrtilles',35);
INSERT INTO aliment_type(name,value) VALUES ('Orange sanguine',45);
INSERT INTO aliment_type(name,value) VALUES ('Pamplemousse',50);
INSERT INTO aliment_type(name,value) VALUES ('Pastèque',30);
INSERT INTO aliment_type(name,value) VALUES ('Pêche',41);
INSERT INTO aliment_type(name,value) VALUES ('Poire',55);
INSERT INTO aliment_type(name,value) VALUES ('Pomme',52);
INSERT INTO aliment_type(name,value) VALUES ('Prune',47);
INSERT INTO aliment_type(name,value) VALUES ('Raisins',70);
INSERT INTO aliment_type(name,value) VALUES ('Rhubarbe',21);
INSERT INTO aliment_type(name,value) VALUES ('Artichaut',47);
INSERT INTO aliment_type(name,value) VALUES ('Asperge',18);
INSERT INTO aliment_type(name,value) VALUES ('Aubergine',24);
INSERT INTO aliment_type(name,value) VALUES ('Avocat',160);
INSERT INTO aliment_type(name,value) VALUES ('Betterave',43);
INSERT INTO aliment_type(name,value) VALUES ('Blettes',19);
INSERT INTO aliment_type(name,value) VALUES ('Brocoli',35);
INSERT INTO aliment_type(name,value) VALUES ('Carotte',36);
INSERT INTO aliment_type(name,value) VALUES ('Champignons',22);
INSERT INTO aliment_type(name,value) VALUES ('Chou chinois',13);
INSERT INTO aliment_type(name,value) VALUES ('Chou-fleur',25);
INSERT INTO aliment_type(name,value) VALUES ('Chou frisé',49);
INSERT INTO aliment_type(name,value) VALUES ('Chou-rave',27);
INSERT INTO aliment_type(name,value) VALUES ('Chou rouge',29);
INSERT INTO aliment_type(name,value) VALUES ('Choux de Bruxelles',43);
INSERT INTO aliment_type(name,value) VALUES ('Concombre',15);
INSERT INTO aliment_type(name,value) VALUES ('Courgette',20);
INSERT INTO aliment_type(name,value) VALUES ('Cresson',19);
INSERT INTO aliment_type(name,value) VALUES ('Épinards',23);
INSERT INTO aliment_type(name,value) VALUES ('Fenouil',31);
INSERT INTO aliment_type(name,value) VALUES ('Haricots verts',25);
INSERT INTO aliment_type(name,value) VALUES ('Maïs',108);
INSERT INTO aliment_type(name,value) VALUES ('Oignon',40);
INSERT INTO aliment_type(name,value) VALUES ('Patates douces',76);
INSERT INTO aliment_type(name,value) VALUES ('Petits pois',82);
INSERT INTO aliment_type(name,value) VALUES ('Piment',40);
INSERT INTO aliment_type(name,value) VALUES ('Poireau',31);
INSERT INTO aliment_type(name,value) VALUES ('Poivron',21);
INSERT INTO aliment_type(name,value) VALUES ('Pomme de terre',86);
INSERT INTO aliment_type(name,value) VALUES ('Potiron',19);
INSERT INTO aliment_type(name,value) VALUES ('Radis',16);
INSERT INTO aliment_type(name,value) VALUES ('Roquette',25);
INSERT INTO aliment_type(name,value) VALUES ('Salade iceberg',14);
INSERT INTO aliment_type(name,value) VALUES ('Agneau',216);
INSERT INTO aliment_type(name,value) VALUES ('Bacon',385);
INSERT INTO aliment_type(name,value) VALUES ('Blanc de poulet',100);
INSERT INTO aliment_type(name,value) VALUES ('Chipolata',340);
INSERT INTO aliment_type(name,value) VALUES ('Entrecôte',166);
INSERT INTO aliment_type(name,value) VALUES ('Escalope de veau',166);
INSERT INTO aliment_type(name,value) VALUES ('Filet de bœuf',188);
INSERT INTO aliment_type(name,value) VALUES ('Filet mignon',157);
INSERT INTO aliment_type(name,value) VALUES ('Jambon cru',192);
INSERT INTO aliment_type(name,value) VALUES ('Jambon cuit',290);
INSERT INTO aliment_type(name,value) VALUES ('Merguez',279);
INSERT INTO aliment_type(name,value) VALUES ('Steak haché',210);
INSERT INTO aliment_type(name,value) VALUES ('Bar',105);
INSERT INTO aliment_type(name,value) VALUES ('Colin',91);
INSERT INTO aliment_type(name,value) VALUES ('Dorade',91);
INSERT INTO aliment_type(name,value) VALUES ('Hareng',122);
INSERT INTO aliment_type(name,value) VALUES ('Maquereau',201);
INSERT INTO aliment_type(name,value) VALUES ('Poulpe',61);
INSERT INTO aliment_type(name,value) VALUES ('Sardine',162);
INSERT INTO aliment_type(name,value) VALUES ('Saumon',208);
INSERT INTO aliment_type(name,value) VALUES ('Sole',75);
INSERT INTO aliment_type(name,value) VALUES ('Thon',144);
INSERT INTO aliment_type(name,value) VALUES ('Truite',122);
INSERT INTO aliment_type(name,value) VALUES ('Crème fleurette',215);
INSERT INTO aliment_type(name,value) VALUES ('Crème fraîche',292);
INSERT INTO aliment_type(name,value) VALUES ('Emmental',382);
INSERT INTO aliment_type(name,value) VALUES ('Faisselle',89);
INSERT INTO aliment_type(name,value) VALUES ('Fromage blanc 0 %',67);
INSERT INTO aliment_type(name,value) VALUES ('Fromage de chèvre',207);
INSERT INTO aliment_type(name,value) VALUES ('Gruyère',392);
INSERT INTO aliment_type(name,value) VALUES ('Lait',47);
INSERT INTO aliment_type(name,value) VALUES ('Lait de coco',136);
INSERT INTO aliment_type(name,value) VALUES ('Mozzarella',330);
INSERT INTO aliment_type(name,value) VALUES ('Œuf',145);
INSERT INTO aliment_type(name,value) VALUES ('Yaourt nature',62);
INSERT INTO aliment_type(name,value) VALUES ('Coquillettes',122);
INSERT INTO aliment_type(name,value) VALUES ('Farfalle',157);
INSERT INTO aliment_type(name,value) VALUES ('Fusillis',153);
INSERT INTO aliment_type(name,value) VALUES ('Gnocchis',126);
INSERT INTO aliment_type(name,value) VALUES ('Feuilles de lasagne',131);
INSERT INTO aliment_type(name,value) VALUES ('Macaronis',178);
INSERT INTO aliment_type(name,value) VALUES ('Pâtes au blé complet',135);
INSERT INTO aliment_type(name,value) VALUES ('Spaghettis',162);
INSERT INTO aliment_type(name,value) VALUES ('Tagliatelles',164);
INSERT INTO aliment_type(name,value) VALUES ('Baguette',280);
INSERT INTO aliment_type(name,value) VALUES ('Brioche',386);
INSERT INTO aliment_type(name,value) VALUES ('Campaillette',245);
INSERT INTO aliment_type(name,value) VALUES ('Chouquettes',406);
INSERT INTO aliment_type(name,value) VALUES ('Croissant',400);
INSERT INTO aliment_type(name,value) VALUES ('Pain au chocolat',435);
INSERT INTO aliment_type(name,value) VALUES ('Pain aux raisins',330);
INSERT INTO aliment_type(name,value) VALUES ('Pain complet',230);
INSERT INTO aliment_type(name,value) VALUES ('Pain de mie',288);
INSERT INTO aliment_type(name,value) VALUES ('Biscuits au chocolat',512);
INSERT INTO aliment_type(name,value) VALUES ('Cheeseburger',250);
INSERT INTO aliment_type(name,value) VALUES ('Chips',239);
INSERT INTO aliment_type(name,value) VALUES ('Kebab',506);
INSERT INTO aliment_type(name,value) VALUES ('Frites',291);
INSERT INTO aliment_type(name,value) VALUES ('Nutella',547);
INSERT INTO aliment_type(name,value) VALUES ('Pizza Margherita',199);

--------------------------------------------------------

--
-- Contenu de la table 'food'
--

INSERT INTO "food" ("id", "user_id", "aliment_type_id", "date", "meal", "type", "quantity", "calory", "emotion") VALUES
(1, 1, 1, '2020-12-10 14:00:00','burger', 'proteine', '300', '1200', 'happy');

--------------------------------------------------------

--
-- Contenu de la table 'water'
--

INSERT INTO "water" ("id", "user_id", "date", "water") VALUES
(1, 1, '2020-11-10 11:00:00', '2'),
(2, 2, '2020-10-10 15:00:00', '150');

-- --------------------------------------------------------

--
-- Contenu de la table 'sleep'
--

INSERT INTO "sleep" ("id", "user_id", "date", "bedTime", "wakeUpTime") VALUES
(1, 1, '2020-12-10', '12:00:00', '07:00:00'),
(2, 2, '2020-04-12', '11:00:00', '06:00:00');

-- --------------------------------------------------------

--
-- Contenu de la table 'sport_type'
--

INSERT INTO sport_type(name,value) VALUES ('Handball',800);
INSERT INTO sport_type(name,value) VALUES ('Water-polo',600);
INSERT INTO sport_type(name,value) VALUES ('Rugby',650);
INSERT INTO sport_type(name,value) VALUES ('Basket',500);
INSERT INTO sport_type(name,value) VALUES ('Volley',450);
INSERT INTO sport_type(name,value) VALUES ('Foot',400);
INSERT INTO sport_type(name,value) VALUES ('Pelote basque',800);
INSERT INTO sport_type(name,value) VALUES ('Squash',600);
INSERT INTO sport_type(name,value) VALUES ('Tennis',400);
INSERT INTO sport_type(name,value) VALUES ('Judo',800);
INSERT INTO sport_type(name,value) VALUES ('Boxe',600);
INSERT INTO sport_type(name,value) VALUES ('Karaté',600);
INSERT INTO sport_type(name,value) VALUES ('Aviron',600);
INSERT INTO sport_type(name,value) VALUES ('Kayak',850);
INSERT INTO sport_type(name,value) VALUES ('Natation',600);
INSERT INTO sport_type(name,value) VALUES ('Course à pied',800);
INSERT INTO sport_type(name,value) VALUES ('Roller',600);
INSERT INTO sport_type(name,value) VALUES ('Cyclisme',500);
INSERT INTO sport_type(name,value) VALUES ('Corde à sauter',700);
INSERT INTO sport_type(name,value) VALUES ('Step',600);
INSERT INTO sport_type(name,value) VALUES ('Zumba',530);
INSERT INTO sport_type(name,value) VALUES ('Ski de fond',500);
INSERT INTO sport_type(name,value) VALUES ('Escalade',540);
INSERT INTO sport_type(name,value) VALUES ('Ski (descente)',300);

-- --------------------------------------------------------

--
-- Contenu de la table 'sport'
--

INSERT INTO "sport" ("id", "user_id", "sport_type_id", "date", "workout", "duration", "intensity", "emotion") VALUES
(1, 1, 1, '2020-04-10 18:00:00','escalade','60', '4', 'happy'),
(2, 2, 1, '2020-01-09 17:00:00','foot','120', '5', 'happy');

--------------------------------------------------------

--
-- Contenu de la table 'task'
--

INSERT INTO "task" ("id", "user_id", "title") VALUES
(1, 1, 'reussir ce putain de projet'),
(2, 1, 'obtenir son titre rncp');

COMMIT;