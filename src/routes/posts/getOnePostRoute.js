const mongoose = require('mongoose');
const express = require('express');
const Posts = require('../../modeles/Posts/Posts');
const verifyToken = require('../../middleware/customMiddleare/verifyToken');
const getOnePostRoute = express.Router();

getOnePostRoute.get('/posts/:id', verifyToken, async(req, res) => {
    try{
      const id = req.params.id;
      const query = { _id: new mongoose.Types.ObjectId(id) } 
      const result = await Posts.findOne(query);

      res.send(result);
      
    }catch (error) {
        console.error('Error getting post data:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = getOnePostRoute;