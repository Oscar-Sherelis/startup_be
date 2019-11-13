const mongoose = require('mongoose');
const projectModel = mongoose.model('projects');

/**
 * @param {*} req Express req Object
 * @param {*} res  Express res Object
 * @param {*} next  Express next Function
 */

 const getProjectController = async (req, res, next) => {
    projectModel.findOne((err, docs) => {
        if (err) {
          res.status(401).send({
            message: "Data collecting went wrong "
          });
        } else {
          res.status(200).send({
            message: "Collected data from database",
            project: docs
          });
        }
      });
 }

 module.exports = getProjectController