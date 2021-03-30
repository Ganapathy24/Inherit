const registerUser = require('../data/registerUser')
const bcrypt = require('bcrypt')
const jsonResponse = require('../JsonResponse')

async function registerController(req, res) {
    const registerAgent = new registerUser()
    let user = req.body
    user.password = await bcrypt.hash(user.password,10)
    let result = await registerAgent.register(user);
    if(result == 1) {
        res.send(jsonResponse("SUCCESSFUL","Sucessfully added a user"))
    }
    else {
        res.send(jsonResponse("UNSUCCESSFUL", "Insertion unsuccessful"))
    }
}

module.exports = registerController;