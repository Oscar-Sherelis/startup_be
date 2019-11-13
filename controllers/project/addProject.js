const mongoose = require('mongoose');
const projectModel = mongoose.model('projects');
const project = new projectModel();

/**
 * @param {*} req Express req Object
 * @param {*} res  Express res Object
 * @param {*} next  Express next Function
 */
const addProjectController = async (req, res, next) => {

// responses only in Controllers ?
// Middlewares rename to controllers DONE
// services - validation, authentification
  try {
    project.projectName = req.body.projectName,
    project.photo = req.body.photo,
    project.projectLocation = req.body.projectLocation,
    project.professionalsNeeded = req.body.professionalsNeeded,
    project.projectArea = req.body.projectArea,
    project.projectShortDescription = req.body.projectShortDescription,
    project.projectDescription = req.body.projectDescription,
    project.lastUpdate = req.body.lastUpdate,
    project.timeInserted = req.body.timeInserted

    await project.save(req.body);
    return next();
  } catch (e) {
    return next(e);
  }
};

module.exports = addProjectController;