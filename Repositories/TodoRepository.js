const mysql = require("mysql2/promise");

const HOST = process.env.DB_HOST;
const USER = process.env.TODO_USER;
const PASSWORD = process.env.TODO_PASSWORD;
const DATABASE = process.env.TODO_DATABASE;

const config = {
  host: HOST,
  user: USER,
  password: PASSWORD,
  database: DATABASE,
};

const getAllTodos = async () => {
  const conn = await mysql.createConnection(config);
  const [results] = await conn.execute("select * from Todo");
  return results;
};

const getTodoById = async (id) => {
  const conn = await mysql.createConnection(config);
  const [result] = await conn.execute("select * from Todo where id= ?", [id]);
  return result;
};

module.exports = {
  getAllTodos,
  getTodoById,
};
