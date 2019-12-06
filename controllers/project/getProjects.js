const mongoose = require('mongoose');
const projectModel = mongoose.model('projects');

/**
 * @param {*} req Express req Object
 * @param {*} res  Express res Object
 * @param {*} next  Express next Function
 */

//  made with pagination
 const getProjectsController = (req, res, next) => {
   req.params.per = parseInt(req.params.per)
   req.params.page = parseInt(req.params.page)
    projectModel.find({})
      .skip(req.params.per * req.params.page)
      .limit(req.params.per)
      .exec((err, projects) => {
        projectModel.countDocuments()
        .exec((err, count) => {
          if (err) {
            return err
          }
          console.log(req.params.page)
          console.log(count / req.params.per)
          console.log('projects: ' + projects)
          res.status(200).send({
            projects,
            current: req.params.page,
            pages: Math.ceil(count / req.params.per)
          })
        })
      })
 }

 module.exports = getProjectsController