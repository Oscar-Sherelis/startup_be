const mongoose = require('mongoose');
const userModel = mongoose.model('users');
// const user = new userModel();
const jwt =  require('jsonwebtoken');

const hashPass = require('../../utilities/passwordHash');
const saltHashPassword = hashPass.saltHashPassword;

const loginController = async (req, res) => {
    try {
      const email = req.body.email;
      const password = saltHashPassword(req.body.password);
      const user = { email, password}
      
      await userModel.findOne({ email, password })
        .then(result => {
          if (result) {
            //CREATE TOKEN
            const accessToken = jwt.sign( {_id: result._id}, 'secret')
            res.setHeader('Authorization', 'Bearer ' + accessToken);
            return res.status(200).send({ message: "Logged in..." });
          } else {
            return res.status(400).send({ message: "Wrong email or password"})
          }
        });
    } catch (e) {
      return res.status(500).send(e);
    }
}

module.exports = loginController;
