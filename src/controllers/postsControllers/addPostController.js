const Posts = require("../../modeles/Posts/Posts");


const addPostController = async(req, res) => {
    try {
        const post = req.body;
        const newPost  = new Posts(post);
        const result = await newPost.save();
        console.log(result);
        res.status(200).json(result);
      } catch (error) {
        console.error('Error  post  data:', error);
        res.status(500).json({ message: 'Internal server error' });
      }
};

module.exports = addPostController;