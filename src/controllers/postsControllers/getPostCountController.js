const Posts = require("../../modeles/Posts/Posts");

const getPostCountController = async (req, res) => {
    try {
        const email = req.params.email;
      
        const aggregationPipline = [
            {
                $match: { authorEmail : email }
            },
            {
                $group: {
                    _id: '$authorEmail',
                    postCount: { $sum: 1 }
                }
            }
        ];
        const result = await Posts.aggregate(aggregationPipline);
        const postCount = result[0].postCount;
        res.send({postCount});
    } catch (error) {
        console.error('Error getting posts data:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports = getPostCountController