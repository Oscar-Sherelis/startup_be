const express = require("express");
const app = express();


const addNewUserMiddleware = require('../../middlewares/user/register');
const loginMiddleware = require('../../middlewares/user/login');
const getUsersMiddleware = require('../../middlewares/user/getUsers');
const deleteUserMiddleware = require('../../middlewares/user/deleteUser');

// User routes
const register = (app) => {
  app.post('/register', [addNewUserMiddleware], (req, res) => {
    return res.json({ message: 'New user added' }).status(200);
  });
}

const login = (app) => {
  app.post('/login', [loginMiddleware], (req, res) => {
    return res.json({ message: 'login successfull'}).status(200);
  });
}

const getUsers = (app) => {
  app.get('/users', [getUsersMiddleware], (req, res) => {
    return res.json({ message: 'Have user data'})
  });
}

const deleteUser = (app) => {
  app.delete('/delete-user/:id', [deleteUserMiddleware], (req, res) => {
    return res.json({ message: 'User deleted'})
  });
}

// module.exports = register
module.exports =  {
  register,
  login,
  getUsers,
  deleteUser
}