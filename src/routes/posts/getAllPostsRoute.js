const express = require('express');
const getAllPostController = require('../../controllers/postsControllers/getAllPostController');
const getAllPostsRoute = express.Router();

getAllPostsRoute.get('/posts', getAllPostController);

module.exports = getAllPostsRoute;