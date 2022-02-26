const todoService = require("./../Services/TodoService");

const login = (req, res) => {
  let user = req.body;
  let authToken = todoService.authenticate(user);
  if (authToken != null) {
    res.json({
      authToken,
    });
  } else {
    res.send(403);
  }
};

module.exports = {
  login,
};
