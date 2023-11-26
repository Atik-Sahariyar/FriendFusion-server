const express = require('express');
const Users = require('../../modeles/Users/Users');
const getUsersRoute = express.Router();


getUsersRoute.get('/users', async(req, res) => {
    try{
      const result = await Users.find();
      res.send(result);
    } catch (error) {
      console.error('Error getting users data:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
});


module.exports = getUsersRoute;