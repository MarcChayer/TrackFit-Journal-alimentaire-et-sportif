const Sequelize = require('sequelize');
const sequelize = require('../database');

class Food extends Sequelize.Model {};

Food.init({
    date: Sequelize.DATE,
    quantity: Sequelize.INTEGER,
    emotion: Sequelize.STRING
}, {
    sequelize,
    tableName: "food"
});


module.exports = Food;
