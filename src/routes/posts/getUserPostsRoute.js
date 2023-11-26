const express = require('express');
const Posts = require('../../modeles/Posts/Posts');
const getUserPostsRoute = express.Router();

getUserPostsRoute.get('/posts/postCount/:email', async (req, res) => {
    try {
        const email = req.params.email;

        const aggregationPipline = [
            {
                $match: { 'authorInfo.email': email }
            },
            {
                $group: {
                    _id: '$authorInfo.email',
                    postCount: { $sum: 1 }
                }
            }
        ];
        const result = await Posts.aggregate(aggregationPipline);
        res.send(result);
    } catch (error) {
        console.error('Error getting posts data:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = getUserPostsRoute;