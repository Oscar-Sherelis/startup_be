const mongoose = require('mongoose');
const projectModel = mongoose.model('projects');
// const project = new projectModel();

/**
 * @param {*} req Express req Object
 * @param {*} res  Express res Object
 * @param {*} next  Express next Function
 */

 const getUserProjectController = async (req, res, next) => {
    projectModel.find({ _id: req.params.users-project-id }, (err, docs) => {
        if (err) {
          res.status(401).send({
            message: "Data collecting went wrong "
          });
        } else {
          res.status(200).send({
            message: "Collected users projects from database",
            usersProjects: docs
          });
        }
      });
 }
 /**
  * task in creating project do not forget
  * Need make 2 routes users projects and route, when press on project as not registered user
  *  After successfull login in res send userProjects Array with projects id
  * 
  * 1 When making project, save project id into user and project collections
  * 2 in front-end forEach users array with projects id
  *     * every cycle will send projects id to find it into projects controller
  *     * after res will be set to state and foreached in front
  */

 module.exports = getUserProjectController;