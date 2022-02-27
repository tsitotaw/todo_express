const todoService = require("./../Services/TodoService");

const getAllTodos = (req, res) => {
  todoService.getAllTodos().then((data) => {
    res.json(data);
  });
};

const getTodoById = (req, res) => {
  let { id } = req.params;
  todoService.getTodoById(id).then((data) => {
    res.json(data);
  });
};

const saveTodo = (req, res) => {
  todoService.saveTodo(req.body);
  res.send("Saved Successfully");
};

module.exports = {
  getAllTodos,
  getTodoById,
  saveTodo,
};
