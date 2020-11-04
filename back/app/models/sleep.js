const Sequelize = require('sequelize');
const sequelize = require('../database');

class Sleep extends Sequelize.Model {};

Sleep.init({
    date: Sequelize.DATE,
    bedTime: Sequelize.TIME,
    wakeUpTime: Sequelize.TIME,
    caloryTotal: Sequelize.STRING
}, {
    sequelize,
    tableName: "sleep"
});


module.exports = Sleep;
