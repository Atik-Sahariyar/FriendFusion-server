const express = require('express');
const Comments = require('../../modeles/Posts/Comments');
const mongoose  = require('mongoose');
const Posts = require('../../modeles/Posts/Posts');
const getReportedCommentsRoute = express.Router();


getReportedCommentsRoute.get('/comments', async(req, res) =>{
    try{
        const filter = { feedback: { $exists: true, $ne: null } };
        const reportedComments = await Comments.find(filter);

        const postIds = reportedComments.map(res => res.postId);
        const reportedPosts = await Posts.find({ _id: { $in: postIds } }).populate('authorName');


        const comments = reportedComments.map(comment => {
            const correspondingPost = reportedPosts.find(post => post._id.toString() === comment.postId);
            return {
                ...comment.toObject(),
                reportedBy: correspondingPost ? correspondingPost.authorName : 'Unknown'
            };
        });

        res.send(comments)
    } catch (error) {
        console.error('Error fetching reported comments:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = getReportedCommentsRoute;