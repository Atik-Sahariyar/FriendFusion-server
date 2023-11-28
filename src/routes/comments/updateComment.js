const mongoose = require('mongoose');
const express = require('express');
const Comments = require('../../modeles/Posts/Comments');
const updateCommentRoute = express.Router();

updateCommentRoute.patch('/comments/:id', async (req, res) => {
    try {
        const report = req.body;
     
        const id = req.params.id;
        const query = { _id: new mongoose.Types.ObjectId(id) }
        
        const updateDoc = {
            $set: {
                feedback: report.feedback
            }
        }
        const result = await Comments.updateOne(query, updateDoc);
    
        res.send(result)

    } catch (error) {
        console.error('Error update comment data:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = updateCommentRoute;