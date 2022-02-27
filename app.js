const express = require("express");
const todoRouter = require("./Routers/TodoRoute");
const loginController = require("./Controllers/LoginController");
const mongoose = require("mongoose");

const app = express();
const PORT = 4001;
const tokenVerifier = require("./Middleware/TokenVerifier");
/**
 * express.json() is a method inbuilt in express to
 * recognize the incoming Request Object as a JSON Object
 */
app.use(express.json());

/**
 * If extended is false, you can not post "nested object"
 */
app.use(express.urlencoded({ extended: false }));
app.use("/api/todos", tokenVerifier.verify, todoRouter);

app.get("/api", (req, res) => {
  res.send("App Works!");
});

app.post("/api/login", loginController.login);

mongoose.connect("mongodb://localhost:27017/todo_db").then(
  () => {
    app.listen(PORT, () => {
      console.log(`Todo app listening on PORT ${PORT}`);
    });
  },
  (err) => {
    console.log(err);
  }
);
