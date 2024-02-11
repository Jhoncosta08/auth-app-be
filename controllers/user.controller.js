const express = require('express');
const router = express.Router();
const userModel = require('../models/user.model');
const crypto = require('node:crypto');

router.get('/users', (req, res) => {
    userModel.findAll().then(users => {
        if (users) {
            res.json(users);
        } else {
            res.status(400);
        }
    }).catch(err => {
        console.log('Error in get all users', err);
    });
});

router.get('/users/:id', (req, res) => {
    const id = req.params.id;
    userModel.findByPk(id).then(user => {
        if (user) {
            res.json(user);
        } else {
            res.status(400);
        }
    }).catch(err => {
        console.log('Error in get user by id', err);
    });
});

router.post('/users', (req, res) => {

});


module.exports = router;
