const {DataTypes} = require('sequelize');

const sequelize = require('../server/db');

const sawClients = sequelize.define('summerAndWinterClients', {
    id: {
        primaryKey: true,
        autoincrement: true,
        allowNull: false,
        type: DataTypes.INTEGER
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    mail: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    address: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = sawClients;
