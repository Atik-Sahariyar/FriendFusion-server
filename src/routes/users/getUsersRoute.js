const express = require('express');
const Users = require('../../modeles/Users/Users');
const verifyToken = require('../../middleware/customMiddleare/verifyToken');
const verifyAdmin = require('../../middleware/customMiddleare/verifyAdmin');
const getUsersRoute = express.Router();


getUsersRoute.get('/users', verifyToken, verifyAdmin, async(req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 5;

    try{
      let totalUser = await Users.countDocuments();
      const startIndex = (page - 1) * limit;
      const aggregationPipline = [
        {
          $skip: startIndex,
        },
        {
          $limit: limit,
        },
  ]

      const result = await Users.aggregate(aggregationPipline);
   
      res.send({result, totalUser});
    } catch (error) {
      console.error('Error getting users data:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
});


module.exports = getUsersRoute;