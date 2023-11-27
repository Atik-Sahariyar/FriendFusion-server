const express = require('express');
const verifyToken = require('../../middleware/customMiddleare/verifyToken');
const getPostCountController = require('../../controllers/postsControllers/getPostCountController');
const getPostCountRoute = express.Router();

getPostCountRoute.get('/posts/postCount/:email', verifyToken, getPostCountController);

module.exports = getPostCountRoute;