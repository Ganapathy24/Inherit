const loginUser = require('../data/loginUser')
const bcrypt = require('bcrypt')

async function loginController(req, res) {
  let user_name = req.body.name;
  let user = await new loginUser().getUser(user_name);
  let password = req.body.password;
  let user_password = user.password;
  const match = await bcrypt.compare(password, user_password);
  res.send(match)
}

module.exports = loginController
