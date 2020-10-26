const Sequelize = require('sequelize');
const sequelize = require('../database');

class Sport extends Sequelize.Model {};

Sport.init({
    // pas sûr pour la ligne ci-dessous : 
    date: Sequelize.DATEONLY,
    duration: Sequelize.INTEGER,
    intensity: Sequelize.STRING,
    emotion: Sequelize.STRING
}, {
    sequelize,
    tableName: "sport"
});


module.exports = Sport;

