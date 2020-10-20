const Sequelize = require('sequelize');
const sequelize = require('../database');

class Weight extends Sequelize.Model {};

Weight.init({
    date: Sequelize.DATE,
    weight: Sequelize.INTEGER,
    imc: Sequelize.INTEGER
}, {
    sequelize,
    tableName: "weight"
});


module.exports = Weight;
