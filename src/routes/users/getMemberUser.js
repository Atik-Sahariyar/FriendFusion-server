const express = require('express');
const Users = require('../../modeles/Users/Users');
const getMemberRoute = express.Router();

getMemberRoute.get('/users/member/:email', async(req, res) => {
    try{
      const email  =  req.params.email;
      const query = { email: email};
      const members = await Users.findOne(query);
      const membership = members?.membership || false;
      res.send(membership);
    } catch (error) {
        console.error('Error create admin :', error);
        res.status(500).json({ message: 'Internal server error' });
      }
});

module.exports = getMemberRoute;