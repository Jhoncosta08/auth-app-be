const sequelize = require('sequelize');
const connection = require('../database/database');

const userModel = connection.define('users', {
    id: {
        primaryKey: true,
        type: sequelize.STRING,
        allowNull: false
    },
    email: {
        type: sequelize.STRING,
        allowNull: false
    },
    password: {
        type: sequelize.STRING,
        allowNull: false
    }
});

// userModel.sync({force: false}).then(() => {
//     console.log('user model has synced successfully');
// }).catch(err => {
//     console.log('Error in user model sync', err);
// });

module.exports = userModel;
