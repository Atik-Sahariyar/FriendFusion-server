const Users = require("../../modeles/Users/Users");


const createNewUserController = async (req, res) => {
    try {
      const user = req.body;
      const query = { email: user.email };
      const existingUser = await Users.findOne(query);
      if (existingUser) {
        return res.send({ message: 'user already exists', insertedId: null })
      }
      const newUser  = new Users(user);
      const result = await newUser.save();
      console.log(result);
      res.status(200).json(result);
    } catch (error) {
      console.error('Error  post user data:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  }

  module.exports = createNewUserController