const mongoose = require('mongoose');
const userModel = mongoose.model('users');
const user = new userModel();

const hashPass = require('../../utilities/passwordHash');

const saltHashPassword = (password) => {
  let salt = hashPass.genRandomString(16); /** Gives us salt of length 16 */
  let passwordData = hashPass.sha512(password, salt);
  return passwordData.passwordHash;
}

/**
 * @param {*} req Express req Object
 * @param {*} res  Express res Object
 * @param {*} next  Express next Function
 */
const addNewUser = async (req, res, next) => {
// const Logger = Container.get('logger');

  try {
   user.firstname = req.body.firstname,
   user.lastname = req.body.lastname,
   user.email = req.body.email,
   user.password = saltHashPassword(req.body.password),
   user.phonenumber = req.body.phonenumber,
   user.country = req.body.country,
   user.image = req.body.image,
   user.description = req.body.description

    await user.save(req.body);
    if (!req.body) {
      return res.sendStatus(401);
    }

    return next();
  } catch (e) {
    return next(e);
  }
};

module.exports = addNewUser;