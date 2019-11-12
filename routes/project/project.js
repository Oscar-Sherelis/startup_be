const express = require("express");
const app = express();

const addProjectMiddleware = require('../../middlewares/project/addProject');
const getProjectsMiddleware = require('../../middlewares/project/getProjects');
const deleteProjectMiddleware = require('../../middlewares/project/getProjects');
const updateProjectMiddleware = require('../../middlewares/project/updateProject');

// Project routes
const addProject = (app) => {
    app.post('/add-project', [addProjectMiddleware], (req, res) => {
      return res.json({ message: 'New project added' }).status(200);
    });
  }
  
  const getProjects = (app) => {
    app.get('/projects', [getProjectsMiddleware], (req, res) => {
      return res.json({ message: 'Projects loaded successfully'}).status(200)
    });
  }
  
  const deleteProject = (app) => {
    app.delete('delete-project/:id', [deleteProjectMiddleware], (req, res) => {
      return res.json({ message: 'Project deleted'}).status(200)
    });
  }

  const updateProject = (app) => {
    app.put('update-project/:id', [updateProjectMiddleware], (req, res) => {
      return res.json({ message: 'Project updated successfully'}).status(200)
    });
  }
  
  // module.exports = register
  module.exports =  {
    addProject,
    getProjects,
    deleteProject,
    updateProject
  }