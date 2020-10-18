const Sequelize = require('sequelize');
const sequelize = require('../database');

class User extends Sequelize.Model {};

User.init({
    lastname: Sequelize.STRING,
    firstname: Sequelize.STRING,
    email: Sequelize.STRING,
    birthdate: Sequelize.DATE,
    gender: Sequelize.STRING,
    weight: Sequelize.INTEGER,
    imc: Sequelize.INTEGER,
    height: Sequelize.INTEGER,
    password: Sequelize.STRING,
    is_admin: Sequelize.BOOLEAN
}, {
    sequelize,
    tableName: "user"
});


module.exports = User;
