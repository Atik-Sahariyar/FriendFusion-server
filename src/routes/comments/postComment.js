const express = require('express');
const Comments = require('../../modeles/Posts/Comments');
const verifyToken = require('../../middleware/customMiddleare/verifyToken');
const postCommentRoute = express.Router();

postCommentRoute.post('/comments', verifyToken, async(req, res) => {
    try{
        const comment = req.body;
        const newcomment  = new Comments(comment);
        const result = await newcomment.save();
        res.status(200).json(result);
    }catch (error) {
        console.error('Error post comment data:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = postCommentRoute;