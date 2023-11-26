const express = require('express');
const createNewUserController = require('../../controllers/userControllers/createNewUserController');
const creatNewUserRoute = express.Router();


creatNewUserRoute.post('/users', createNewUserController);

module.exports = creatNewUserRoute;