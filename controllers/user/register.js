const mongoose = require('mongoose');
const userModel = mongoose.model('users');
const user = new userModel();

const hashPass = require('../../utilities/passwordHash');
const saltHashPassword = hashPass.saltHashPassword;

/**
 * @param {*} req Express req Object
 * @param {*} res  Express res Object
 * @param {*} next  Express next Function
 */
const addNewUser = async (req, res, next) => {
  try {
    (user.firstname = req.body.firstname),
      (user.lastname = req.body.lastname),
      (user.email = req.body.email),
      (user.password = saltHashPassword(req.body.password)),
      (user.phonenumber = req.body.phonenumber),
      (user.country = req.body.country),
      (user.image = req.body.image),
      (user.description = req.body.description);

    await user.save(req.body);
    return res.send({ message: "User added successfully " });
  } catch (e) {
    return e;
  }
};

module.exports = addNewUser;