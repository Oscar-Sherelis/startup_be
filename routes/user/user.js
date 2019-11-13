const express = require("express");
const app = express();

const addNewUserController = require('../../Controllers/user/register');
const loginController = require('../../Controllers/user/login');
const getUsersController = require('../../Controllers/user/getUsers');
const deleteUserController = require('../../Controllers/user/deleteUser');

// User routes
const register = (app) => {
  app.post('/register', [addNewUserController], (req, res) => {
    return res.json({ message: 'New user added' }).status(200);
  });
}

const login = (app) => {
  app.post('/login', [loginController], (req, res) => {
    return res.json({ message: 'login successfull'}).status(200);
  });
}

const getUsers = (app) => {
  app.get('/users', [getUsersController], (req, res) => {
    return res.json({ message: 'Have user data'})
  });
}

const deleteUser = (app) => {
  app.delete('/delete-user/:id', [deleteUserController], (req, res) => {
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