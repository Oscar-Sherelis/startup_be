const express = require("express");
const app = express();

const addNewUserController = require('../../Controllers/user/register');
const loginController = require('../../Controllers/user/login');
const getUsersController = require('../../Controllers/user/getUsers');
const deleteUserController = require('../../Controllers/user/deleteUser');

// User routes
const register = (app) => {
  app.post('/register', (req, res) => {
    return addNewUserController(req, res);
  });
}

const login = (app) => {
  app.post('/login', [loginController], (req, res) => {
  });
}

const getUsers = (app) => {
  app.get('/users', [getUsersController], (req, res) => {
  });
}

const deleteUser = (app) => {
  app.delete('/delete-user/:id', [deleteUserController], (req, res) => {
  });
}

module.exports =  {
  register,
  login,
  getUsers,
  deleteUser
}