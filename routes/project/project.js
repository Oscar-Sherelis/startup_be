const express = require("express");
const app = express();

const addProjectController = require('../../controllers/project/addProject');
const getProjectsController = require('../../controllers/project/getProjects');
const deleteProjectController = require('../../controllers/project/deleteProject');
const updateProjectController = require('../../controllers/project/updateProject');

// Project routes
const addProject = (app) => {
    app.post('/add-project', [addProjectController], (req, res) => {
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
    app.get('/projects/:users-project-id?', [getUserProjectController], (req, res) => {
    });
  }
  

  const deleteProject = (app) => {
    app.delete('/delete-project/:id', [deleteProjectController], (req, res) => {
    });
  }

  const updateProject = (app) => {
    app.put('/update-project/:id', [updateProjectController], (req, res) => {
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