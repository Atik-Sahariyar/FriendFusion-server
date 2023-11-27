const express = require('express');
const verifyToken = require('../../middleware/customMiddleare/verifyToken');
const deletePostController = require('../../controllers/postsControllers/deletePostController');
const  deletePostRoute = express.Router();

deletePostRoute.delete('/posts/myposts/delete/:id', verifyToken, deletePostController  );

module.exports = deletePostRoute;