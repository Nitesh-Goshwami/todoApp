const express = require("express");

const app = express();

const usersController = require("./controllers/user.controller");
const todoController = require("./controllers/todo.controller")

app.use(express.json());

app.use("/users", usersController);
app.use("/todos", todoController)

module.exports = app;
