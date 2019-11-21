const express = require("express");
const app = express();

/**
 * main tasks*
 * 1 save project id into users controller
 *  *after successfull login send user id
 *  *when creating project take id to know, what user made project and save project id into user projects array
 * 
 * 2 after click to project as not registered user takes project id
 *  *finds user in controller user.projects.find({ _id: ""})
 * to print user who made that project
 * 
 * to find project projects.find()
 */
const addProjectController = require('../../controllers/project/addProject');
const getProjectsController = require('../../controllers/project/getProjects');
const deleteProjectController = require('../../controllers/project/deleteProject');
const updateProjectController = require('../../controllers/project/updateProject');

const isAuth = require('../../middlewares/isAuth')


// Project routes
const addProject = (app) => {
    app.post('/add-project', [addProjectController, isAuth], (req, res) => {
  }
  
  const getProjects = (app) => {
    app.get('/projects', (req, res) => {
      return getProjectsController(req, res);
    });
  }

  const getProject = (app) => {
    app.get('/project/:project-id', (req, res) => {
      return getProjectController(req, res);
    });
  }

  // 1 validate 2 auth 3 getUsersProject
  const getUserProject = (app) => {
    app.get('/projects/:users-project-id?', [getUserProjectController, isAuth], (req, res) => {
    });
  }
  
  const deleteProject = (app) => {
    app.delete('/delete-project/:id', [deleteProjectController, isAuth], (req, res) => {
    });
  }

  const updateProject = (app) => {
    app.put('/update-project/:id', [updateProjectController, isAuth], (req, res) => {
    });
  }
  
  module.exports =  {
    addProject,
    getProjects,
    getProject,
    getUserProject,
    deleteProject,
    updateProject
  }