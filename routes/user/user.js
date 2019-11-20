const express = require("express");
const app = express();

const addNewUserController = require('../../Controllers/user/register');
const loginController = require('../../controllers/user/login');
const getUsersController = require('../../Controllers/user/getUsers');
const deleteUserController = require('../../Controllers/user/deleteUser');

// MIDDLEWARES
const validate = require('../../middlewares/validation');
const isAuth = require('../../middlewares/isAuth')
// User routes
const register = (app) => {
  app.post('/register', [validate.registration], (req, res) => {
    return addNewUserController(req, res);
  });
}

const login = (app) => {
  app.post('/login', [validate.login], (req, res) => {
    return loginController.Login(req, res);
  });
}

const getUsers = (app) => {
  app.get('/users', isAuth, (req, res) => {
    return getUsersController(req, res);
  });
}

const deleteUser = (app) => {
  app.delete('/delete-user/:id', (req, res) => {
    return deleteUserController(req, res);
  });
}

const refreshTokens = (app) => {
  app.post('/refresh-tokens', (req, res) => {
    return loginController.RefreshTokens(req, res);
  })
}

module.exports =  {
  register,
  login,
  getUsers,
  deleteUser,
  refreshTokens
}