const jwt = require("jsonwebtoken");
const secretKey = process.env.MY_SECRET_KEY;

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

const authenticate = (user) => {
  if (user.username == "admin" && user.password == "admin") {
    return jwt.sign(user, secretKey);
  }
  return null;
};

/**
 * verify token if it is a valid token
 * @param {*} token
 */
const verify = (token) => {
  return jwt.verify(token, secretKey);
};

module.exports = {
  getAllTodos,
  getTodoById,
  saveTodo,
  authenticate,
  verify,
};
