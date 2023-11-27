const express = require('express');
const Comments = require('../../modeles/Posts/Comments');
const getCommentsRoute = express.Router();

getCommentsRoute.get('/comments/:postId', async(req, res) => {

    try{
        const postId = req.params.postId;
        const filter = { postId: postId };
        const comments  = await Comments.find(filter);
        res.send(comments);
    } catch (error) {
        console.error('Error post comment data:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = getCommentsRoute;