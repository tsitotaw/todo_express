let todos = [
  {
    id: "b340e860-7d9a-48b7-92f5-347f2802feb6",
    title: "Work on Security From Service",
  },
  {
    id: "b340e860-7d9a-48b7-92f5-347f2802feb2",
    name: 1,
    title: "Work on Code Structure",
  },
];

const getAllTodos = () => {
  return todos;
};

const getTodoById = (id) => {
  return todos.find((todo) => todo.id == id);
};

const saveTodo = (todo) => {
  todos = { ...todos, todo };
  return todos;
};

module.exports = {
  getAllTodos,
  getTodoById,
  saveTodo,
};
