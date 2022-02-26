const todoService = require("./../Services/TodoService");

const getAllTodos = (req, res) => {
  const data = todoService.getAllTodos();
  res.json(data);
};

const getTodoById = (req, res) => {
  let { id } = req.params;
  let result = todoService.getTodoById(id);

  res.json(result);
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
