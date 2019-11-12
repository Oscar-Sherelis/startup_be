const mongoose = require('mongoose');
const projectModel = mongoose.model('projects');
const project = new projectModel();

/**
 * @param {*} req Express req Object
 * @param {*} res  Express res Object
 * @param {*} next  Express next Function
 */
const addProjectMiddleware = async (req, res, next) => {
// const Logger = Container.get('logger');

  try {
    project.projectName = req.body.projectName,
    project.image = req.body.image,
    project.projectLocation = req.body.projectLocation,
    project.professionalsNeeded = req.body.professionalsNeeded,
    project.projectArea = req.body.projectArea,
    project.projectShortDescription = req.body.projectShortDescription,
    project.projectDescription = req.body.projectDescription,
    project.lastUpdate = req.body.lastUpdate,
    project.timeInserted = req.body.timeInserted

    await project.save(req.body);
    if (!req.body) {
      return res.sendStatus(401);
    }
    return next();
  } catch (e) {
    return next(e);
  }
};

module.exports = addProjectMiddleware;