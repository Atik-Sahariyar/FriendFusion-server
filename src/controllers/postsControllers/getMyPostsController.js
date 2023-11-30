const Posts = require("../../modeles/Posts/Posts");

const getMyPostsController = async(req, res) => {
    try{
        const email = req.params.email;

        const aggregationPipline = [
            {
                $match: { authorEmail: email }
            },
            {
                $sort: {postTime: -1}
            }
        ];
       
        const result = await Posts.aggregate(aggregationPipline);
        res.send(result);

    } catch (error) {
        console.error('Error getting posts data:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};


module.exports = getMyPostsController;

