const Article = require('./article');
const Food = require('./food');
const Sleep = require('./sleep');
const Sport = require('./sport');
const Task = require('./task');
const User = require('./user');
const Weight = require('./weight');
const Water = require('./water');

// Relations

// Un user à plusieurs article en fav
User.belongsToMany(Article, {
    // alias de l'association
    as: "articles",
    // "via la table de liaison qui s'appelle ..."
    through: 'favorite_article',
    // le nom de la clé de user dans la table de liaison
    foreignKey: "user_id",
    // le nom de la clé de user dans la table de liaison
    otherKey: "article_id",
});
// ... et la réciproque !
Article.belongsToMany(User, {
    as: "users",
    through: 'favorite_article',
    foreignKey: 'article_id',
    otherKey: 'user_id',
});

// Un user à plusieurs données de sport
User.hasMany(Sport, {
    foreignKey: "user_id",
    as: "sports"
});

// Un tracker sport à un seul user
Sport.belongsTo(User, {
    foreignKey: "user_id",
    as: "user"
});

// Un user à plusieurs données de sleep
User.hasMany(Sleep, {
    foreignKey: "user_id",
    as: "sleeps"
});

// Un user à plusieurs données de weight
User.hasMany(Weight, {
    foreignKey: "user_id",
    as: "weights"
});

// Un user à plusieurs données de water
User.hasMany(Water, {
    foreignKey: "user_id",
    as: "waters"
});

// Un tracker weight à un seul user
Weight.belongsTo(User, {
    foreignKey: "user_id",
    as: "user"
});

// Un tracker water à un seul user
Water.belongsTo(User, {
    foreignKey: "user_id",
    as: "user"
});

// Un tracker sleep à un seul user
Sleep.belongsTo(User, {
    foreignKey: "user_id",
    as: "user"
});

// Un user à plusieurs données de food
User.hasMany(Food, {
    foreignKey: "user_id",
    as: "foods"
});

// Un tracker food à un seul user
Food.belongsTo(User, {
    foreignKey: "user_id",
    as: "user"
});

// Un user à plusieurs données de task
User.hasMany(Task, {
    foreignKey: "user_id",
    as: "tasks"
});

// Un task à un seul user
Task.belongsTo(User, {
    foreignKey: "user_id",
    as: "user"
});

module.exports = { Article, Food, Sleep, Sport, Task, User };