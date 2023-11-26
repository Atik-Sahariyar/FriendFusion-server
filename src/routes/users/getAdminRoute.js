const express = require('express');
const getAdminRoute = express.Router();
const verifyToken = require('../../middleware/customMiddleare/verifyToken');
const getAdminController = require('../../controllers/userControllers/getAdminController');


getAdminRoute.get('/users/admin/:email', verifyToken, getAdminController);

module.exports = getAdminRoute;