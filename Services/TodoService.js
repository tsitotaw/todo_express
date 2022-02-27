const jwt = require("jsonwebtoken");
const todoRepository = require("./../Repositories/TodoRepository");
const todoMongoRepository = require("./../Repositories/TodoMongoRepositories");

const secretKey = process.env.MY_SECRET_KEY;

const getAllTodos = () => {
  return todoMongoRepository.getAllTodos().then((data) => {
    return data;
  });
  // return todoRepository.getAllTodos().then((data) => {
  //   return data;
  // });
};

const getTodoById = (id) => {
  return todoRepository.getTodoById(id).then((data) => {
    // console.log(data);
    return data;
  });
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
