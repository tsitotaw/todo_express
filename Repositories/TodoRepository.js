/**
 * this needs to do all the CRUD operations
 */
const Todo = require("./../Models/Todo");

const saveTodo = (todo) => {
  console.log(`Saved Todo name ${todo.title}`);
};

const getAllTodo = () => {
  /**
   * call the database and store it in a variable (list of Todos)
   */
  let mySet = new Set();
  mySet.add(new Todo());
};
