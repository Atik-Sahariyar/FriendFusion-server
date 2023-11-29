const express = require('express');
const Users = require('../../modeles/Users/Users');
const Posts = require('../../modeles/Posts/Posts');
const Comments = require('../../modeles/Posts/Comments');
const adminStatsRoute = express.Router();

adminStatsRoute.get('/admin-stats',/* verifyToken, verifyAdmin, */ async(req, res) => {
    const users = await Users.estimatedDocumentCount()
    const posts = await Posts.estimatedDocumentCount();
    const comments = await Comments.estimatedDocumentCount();

    res.send({ 
        users,
        posts,
        comments
          });
  });


  module.exports = adminStatsRoute;