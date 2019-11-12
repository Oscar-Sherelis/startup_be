const mongoose = require('mongoose');
const userModel = mongoose.model('users');
// const user = new userModel();

/**
 * @param {*} req Express req Object
 * @param {*} res  Express res Object
 * @param {*} next  Express next Function
 */
const getUsersMiddleware = (req, res, next) => {

  userModel.find((err, docs) => {
        if (err) {
          res.status(401).send({
            message: "Data collecting went wrong "
          });
        } else {
          res.status(200).send({
            message: "Collected data from database",
            users: docs
          });
        }
      });
}

module.exports = getUsersMiddleware;