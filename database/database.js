const {Sequelize} = require('sequelize');
const dotenv = require('dotenv');
dotenv.config();
const env = process.env;

const connection = new Sequelize(env.DATABASE_NAME, env.DATABASE_USER, env.DATABASE_PASSWORD, {
    host: env.DATABASE_HOST,
    dialect: env.DATABASE,
    timezone: env.DATABASE_TIMEZONE
});

module.exports = connection;
