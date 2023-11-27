const express = require('express');
const verifyToken = require('../../middleware/customMiddleare/verifyToken');
const getMyPostsController = require('../../controllers/postsControllers/getMyPostsController');
const getMyPostsRoute = express.Router();

getMyPostsRoute.get('/posts/myposts/:email', verifyToken, getMyPostsController);

module.exports = getMyPostsRoute;