const express = require("express");
const todoRouter = require("./Routers/TodoRoute");
const app = express();
const PORT = 4001;

/**
 * express.json() is a method inbuilt in express to
 * recognize the incoming Request Object as a JSON Object
 */
app.use(express.json());

/**
 * If extended is false, you can not post "nested object"
 */
app.use(express.urlencoded({ extended: false }));
app.use("/api/todos", todoRouter);

app.get("/api", (req, res) => {
  res.send("App Works!");
});

app.listen(PORT, () => {
  console.log(`Todo app listening on PORT ${PORT}`);
});
