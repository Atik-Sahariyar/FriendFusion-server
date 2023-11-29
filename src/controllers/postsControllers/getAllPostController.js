const Posts = require("../../modeles/Posts/Posts");

const getAllPostController = async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 5;
  const searchTag = req.query.tag || false;
  try {

    let totalPosts = await Posts.countDocuments();
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;


    const filter = { tag: searchTag };
    const searchResult = await Posts.find(filter);
    // console.log(searchResult);
    const aggregationPipline = [
          {
              $sort: { postTime: -1 }
          },
    
          {
            $skip: startIndex,
          },
          {
            $limit: limit,
          },

    ]
    let posts = await Posts.aggregate(aggregationPipline);
    if (searchTag) {
      posts = searchResult;
      totalPosts = posts.length;
    }

    const pagination = {};
    if (endIndex < totalPosts) {
      pagination.next = {
        page: page + 1,
        limit: limit,
      };
    }
    if (startIndex > 0) {
      pagination.prev = {
        page: page - 1,
        limit: limit,
      };
    }
    const forPopular = [
      {
        $addFields: {
          voteDifference: { $subtract: ["$upVote", "$downVote"] }
        }
      },
      {
        $sort: { voteDifference: -1 }
      },
      {
        $skip: startIndex,
      },
      {
        $limit: limit,
      },
    ];

    const popularPosts = await Posts.aggregate(forPopular);
    res.send({ posts, popularPosts, pagination, totalPosts });

  } catch (error) {
    console.error('Error getting posts data:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = getAllPostController;