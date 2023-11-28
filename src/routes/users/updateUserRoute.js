const express = require('express');
const Users = require('../../modeles/Users/Users');
const verifyToken = require('../../middleware/customMiddleare/verifyToken');
const updateUserRoute = express.Router();

updateUserRoute.patch('/users/:email', verifyToken, async(req, res) => {
    try{
       const email = req.params.email;
       const query = { email: email};
       const updateDoc = {
        $set: {
            membership: true
        }
       }
       const result = await Users.updateOne(query, updateDoc)
       console.log(result);
       res.send(result);

    }catch (error) {
      console.error('Error updating user status:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = updateUserRoute;