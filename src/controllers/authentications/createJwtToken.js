const generateToken = require("../../utils/generateToken");


const createJwtToken = async (req, res) => {
    try {
      const user = req.body;
      const token = generateToken(user);
      // res.status(200).json(token);
      res.send({ token })
    } catch (error) {
      console.error('Error jwt token create :', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  }

  module.exports = createJwtToken;