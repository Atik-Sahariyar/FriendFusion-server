const express = require('express');
const verifyToken = require('../../middleware/customMiddleare/verifyToken');
const addPostController = require('../../controllers/postsControllers/addPostController');
const addPostRoute = express.Router();

addPostRoute.post('/posts', verifyToken, addPostController );

module.exports = addPostRoute;