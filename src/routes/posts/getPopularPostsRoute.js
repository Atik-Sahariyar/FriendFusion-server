
const express = require('express');
const Posts = require('../../modeles/Posts/Posts');
const getPopularPostsRoute = express.Router();

getPopularPostsRoute.get('/posts/popular', async (req, res) => {
    try {
        const aggregattionPipeline = [
            {
                $addFields: {
                    voteDifference: { $subtract: ["$upVote" , "$downVote"] }
                }
            },
            {
                $sort: { voteDifference: -1 }
            }
        ];

        const result = await Posts.aggregate(aggregattionPipeline);
        res.send(result)

    } catch (error) {
        console.error('Error getting posts data:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports  = getPopularPostsRoute;