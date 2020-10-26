const Sequelize = require('sequelize');
const sequelize = require('../database');

class Sleep extends Sequelize.Model {};

Sleep.init({
    date: Sequelize.DATE,
    bedtime: Sequelize.TIME,
    wakeUpTime: Sequelize.TIME
}, {
    sequelize,
    tableName: "sleep"
});


module.exports = Sleep;
