const dotenv = require('dotenv');
dotenv.config();

const {Article, Food, Sleep, Sport, Task, User} = require('./app/models');

/**
 * Test des relations
 */


User.findAll({
    include:['articles']
}).then((users) => {
    for (let user of users) {
        console.log(user.firstName, user.articles.length);
    }
});