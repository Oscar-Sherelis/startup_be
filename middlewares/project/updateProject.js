const mongoose = require('mongoose');
const projectModel = mongoose.model('projects');
const project = new projectModel();

/**
 * @param {*} req Express req Object
 * @param {*} res  Express res Object
 * @param {*} next  Express next Function
 */

const updateProjectMiddleware =(req, res, next) => {
    projectModel.findOneAndUpdate(
      { _id: req.body._id },
      req.body,
      { new: true },
      (err, doc) => {
        if (err) {
          res.status(400).send({ error: "Update was not successfull" });
        } else {
          res.status(201).send({
            message: req.body.name + " Updated successfully",
            project: req.body
          });
        }
      }
    );
  }

  module.exports = updateProjectMiddleware