const express = require('express');
const verifyToken = require('../../middleware/customMiddleare/verifyToken');
const verifyAdmin = require('../../middleware/customMiddleare/verifyAdmin');
const makeAdminController = require('../../controllers/userControllers/makeAdminController');
const makeAdminRoute = express.Router();

makeAdminRoute.patch('/users/admin/:id', verifyToken, verifyAdmin , makeAdminController);

module.exports = makeAdminRoute;

