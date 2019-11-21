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
            // after successfull log in send user id to find all users projects
            return res.send({ userId: user._id});
          } else {
            return res.send({ message: "Wrong email or password"})
          }
        });
  
       } catch (e) {
         return next(e);
       }
}

module.exports = loginController;
