const Posts = require("../../modeles/Posts/Posts");

const getPostCountController = async (req, res) => {
    try {
        const email = req.params.email;
        console.log(email);
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
        console.log('posts', result);
        res.send(result);
    } catch (error) {
        console.error('Error getting posts data:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports = getPostCountController