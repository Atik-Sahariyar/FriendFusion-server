const mongoose = require('mongoose');
const Users = require('../../modeles/Users/Users');

const makeAdminController =  async (req, res) => {
    try {
      const id = req.params.id;
      const filter = { _id: new mongoose.Types.ObjectId(id) } 
      const updatedDoc = {
        $set: {
          role: 'admin'
        }
      }
      const result = await Users.updateOne(filter, updatedDoc);
      res.status(200).json(result);
    } catch (error) {
      console.error('Error create admin :', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };

  module.exports = makeAdminController;
