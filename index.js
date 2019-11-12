const express = require("express");
const db = require('./db/db');
const bodyParser = require("body-parser");
const app = express();
const jwt = require('jsonwebtoken');

const cors = require('cors');
app.use(cors());

app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(bodyParser.json());

// for password hashing
// const crypto = require('crypto');
// not working***
// require('./passwordHash.js');

// routes

// user route
const userRoute = require('./routes/user/user');
userRoute.register(app);
userRoute.login(app);
userRoute.getUsers(app);
userRoute.deleteUser(app);

// project route
const projectRoute = require('./routes/project/project');
projectRoute.addProject(app);
projectRoute.getProjects(app);
projectRoute.deleteProject(app);
projectRoute.updateProject(app);
// register(app)

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
});