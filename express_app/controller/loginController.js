const loginUser = require('../data/loginUser')
const bcrypt = require('bcrypt')
const jsonResponse = require('../JsonResponse')

async function loginController(req, res) {
  let user_name = req.body.name;
  let password = req.body.password;

  let user = await new loginUser().getUser(user_name);
  if(user === null) {
    res.send(jsonResponse("UNSUCCESSFUL", "User not found"))
  }
  else {
    const match = await bcrypt.compare(password, user.password);
    if(match) {
      // req.session.user = user.name
      res.send(jsonResponse("SUCCESSFUL", "Login successful", user));
    }
    else
      res.send(jsonResponse("DENIED", "Incorrect password", match));
  }
}

module.exports = loginController
