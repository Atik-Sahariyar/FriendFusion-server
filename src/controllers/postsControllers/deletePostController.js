const { default: mongoose } = require("mongoose");
const Posts = require("../../modeles/Posts/Posts");

const deletePostController =  async(req, res) => {
    try{
      const id = req.params.id;
      const deletePost = await Posts.findByIdAndDelete(id);
      res.send(deletePost);
    } catch (error) {
        console.error('Error delete post data:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports = deletePostController;