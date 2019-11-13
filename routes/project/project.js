const express = require("express");
const app = express();

const addProjectController = require('../../Controllers/project/addProject');
const getProjectsController = require('../../Controllers/project/getProjects');
const deleteProjectController = require('../../Controllers/project/deleteProject');
const updateProjectController = require('../../Controllers/project/updateProject');

// Project routes
const addProject = (app) => {
    app.post('/add-project', (req, res) => {
      return addProjectController;
    });
  }
  
  const getProjects = (app) => {
    app.get('/projects', (req, res) => {
      return getProjectsController;
    });
  }

  const getProject = (app) => {
    app.get('/project/:project-id', (req, res) => {
      return getProjectController
    })
  }

  // 1 validate 2 auth 3 getUsersProject
  const getUserProject = (app) => {
    app.get('/projects/:users-project-id?', [getUserProjectController], (req, res) => {
      return res.json({ message: 'User project loaded successfully' }).status(200)
    });
  }
  

  const deleteProject = (app) => {
    app.delete('/delete-project/:id', [deleteProjectController], (req, res) => {
      return res.json({ message: 'Project deleted'}).status(200)
    });
  }

  const updateProject = (app) => {
    app.put('/update-project/:id', [updateProjectController], (req, res) => {
      return res.json({ message: 'Project updated successfully'}).status(200)
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