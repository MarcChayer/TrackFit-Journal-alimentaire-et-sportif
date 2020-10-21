const Sequelize = require('sequelize');
const sequelize = require('../database');

class Food extends Sequelize.Model {};

Food.init({
    date: Sequelize.DATE,
    meal: Sequelize.STRING,
    type: Sequelize.STRING,
    quantity: Sequelize.INTEGER,
    calory: Sequelize.INTEGER,
    emotion: Sequelize.STRING
}, {
    sequelize,
    tableName: "food"
});


module.exports = Food;
