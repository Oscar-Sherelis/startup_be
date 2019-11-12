const mongoose = require('mongoose');
const projectModel = mongoose.model('projects');
// const project = new projectModel();

/**
 * @param {*} req Express req Object
 * @param {*} res  Express res Object
 * @param {*} next  Express next Function
 */

 const deleteProjectMiddleware = async (req, res, next) => {
    projectModel.findByIdAndRemove({ _id: req.params.id }).then(deletedProject => {
        try {
          // return person object, what was deleted
          res
            .status(201)
            .send({ success: deletedProject.name + " was deleted successfully " });
        } catch (err) {
          res.status(400).send({ error: "Delete error " });
        }
      });
 }

 module.exports = deleteProjectMiddleware;