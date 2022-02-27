const Todo = require("./../Models/Todo");

const getAllTodos = async () => {
  return Todo.find().then((data) => {
    return data;
  });
};

module.exports = {
  getAllTodos,
};
