const mongoose = require('mongoose');
const userModel = mongoose.model('users');
// const user = new userModel();

/**
 * @param {*} req Express req Object
 * @param {*} res  Express res Object
 * @param {*} next  Express next Function
 */

 const deleteUserMiddleware = async (req, res, next) => {
     
  userModel.findByIdAndRemove({ _id: req.params.id }).then(deletedUser => {
        try {
          // return person object, what was deleted
          res
            .status(201)
            .send({ success: deletedUser.firstname + " was deleted successfully " });
        } catch (err) {
          res.status(400).send({ error: "Delete error " });
        }
      });
 }

 module.exports = deleteUserMiddleware;