const loginUser = require('../data/loginUser')
const bcrypt = require('bcrypt')
const jsonResponse = require('../JsonResponse')

async function loginController(user_name, password) {

  let user = await new loginUser().getUser(user_name);
  if(user === null) {
    return jsonResponse("UNSUCCESSFUL", "User not found")
  }
  else {
    const match = await bcrypt.compare(password, user.password);
    if(match) 
        return jsonResponse("SUCCESSFUL", "Login successful", match);
    else 
        return jsonResponse("DENIED", "Incorrect password", match);
  }
}

module.exports = loginController
