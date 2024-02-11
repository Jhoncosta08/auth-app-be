const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const env = process.env;
const app = express();
app.use(express.urlencoded({extended: true}));
app.use(express.json());
const connection = require('./database/database');
const userController = require('./controllers/user.controller');
const userModel = require('./models/user.model');

connection.authenticate().then(() => {
    console.log('Database connected.');
}).catch(err => {
    console.log('Error in database connection', err);
});

app.listen(env.PORT, env.DATABASE_HOST, () => {
    console.log(`[server]: Server ${env.DATABASE_HOST} is running at http://localhost:${env.PORT}`);
});

app.use('/', userController);

