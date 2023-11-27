const mongoose = require('mongoose');
const express = require('express');
const Posts = require('../../modeles/Posts/Posts');

const updatePostRoute = express.Router();

updatePostRoute.patch('/posts/update/:id', async(req, res) => {
    try{
       const item = req.body;
       const id = req.params.id;
       const filter = { _id: new mongoose.Types.ObjectId(id) } 
       const updateDoc = {
        $set: {
          upVote: item?.upVote,
          downVote: item?.downVote,
        }
      }
      const result  = await Posts.updateOne(filter, updateDoc);
      res.send(result);
    }  catch (error) {
        console.error('Error update post data:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});


module.exports = updatePostRoute;