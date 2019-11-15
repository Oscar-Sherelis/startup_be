const mongoose = require('mongoose');
const userModel = mongoose.model('users');
const user = new userModel();

const loginController = async (req, res, next) => {
    try {
        user.email = req.body.email,
        user.password = req.body.password,
     
         await userModel.findOne({ email: user.email, password: user.password })
          .then(result => {
          if (result) {
            return next();
          } else {
            return res.send({ message: "Wrong email or password"})
          }
        });
  
       } catch (e) {
         return next(e);
       }
}

module.exports = loginController;
