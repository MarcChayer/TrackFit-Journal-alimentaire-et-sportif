const Sequelize = require('sequelize');
const sequelize = require('../database');

class Food extends Sequelize.Model {};

Food.init({
    date: Sequelize.DATE,
    bedtime: Sequelize.TIME,
    wakeUpTime: Sequelize.TIME
}, {
    sequelize,
    tableName: "food"
});


module.exports = Food;
