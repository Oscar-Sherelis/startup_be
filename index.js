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

// routes
// axios routes let do some thing if loged in
// json webtokens need to know more

// user routes
const userRoute = require('./routes/user/user');
userRoute.register(app);
userRoute.login(app);
userRoute.getUsers(app);
userRoute.deleteUser(app);
userRoute.refreshTokens(app);

// project routes
const projectRoute = require('./routes/project/project');
projectRoute.addProject(app);
projectRoute.getProjects(app);
projectRoute.getProject(app);
projectRoute.getUserProjects(app);
projectRoute.deleteProject(app);
projectRoute.updateProject(app);

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
});