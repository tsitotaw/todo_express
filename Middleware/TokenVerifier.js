const todoService = require("./../Services/TodoService");
const verify = (req, res, next) => {
  let token = req.headers["authorization"].split(" ")[1];
  if (!token) {
    res.sendStatus(403);
  } else {
    try {
      let response = todoService.verify(token);
      if (typeof response == "undefined") res.sendStatus(403);
      else next();
    } catch (err) {
      res.sendStatus(403);
    }
  }
};

module.exports = {
  verify,
};
