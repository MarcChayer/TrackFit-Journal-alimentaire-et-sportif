const Sequelize = require('sequelize');
const sequelize = require('../database');

class Sport extends Sequelize.Model {};

Sport.init({
    date: Sequelize.DATEONLY,
    caloryTotal: Sequelize.STRING,
    duration: Sequelize.INTEGER,
    intensity: Sequelize.STRING,
    emotion: Sequelize.STRING
}, {
    sequelize,
    tableName: "sport"
});


module.exports = Sport;

