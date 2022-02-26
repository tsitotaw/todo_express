const express = require("express");
const todoController = require("../Controllers/TodoController");

const { v4: uuidv4 } = require("uuid");
const userRouter = express.Router();

userRouter.get("/", todoController.getAllTodos);

userRouter.get("/:id", todoController.getTodoById);

userRouter.post("/", todoController.saveTodo);

module.exports = userRouter;
