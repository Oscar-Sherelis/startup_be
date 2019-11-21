const express = require("express");
const app = express();

const addProjectController = require('../../controllers/project/addProject');
const getProjectsController = require('../../controllers/project/getProjects');
const deleteProjectController = require('../../controllers/project/deleteProject');
const updateProjectController = require('../../controllers/project/updateProject');

const isAuth = require('../../middlewares/isAuth')


// Project routes
const addProject = (app) => {
    app.post('/add-project', [addProjectController, isAuth], (req, res) => {
    });
  }
  
  const getProjects = (app) => {
    app.get('/projects', [getProjectsController], (req, res) => {
    });
  }

  const getProject = (app) => {
    app.get('/project/:project-id', [getProjectController], (req, res) => {
    })
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
  
  // module.exports = register
  module.exports =  {
    addProject,
    getProjects,
    getProject,
    getUserProject,
    deleteProject,
    updateProject
  }