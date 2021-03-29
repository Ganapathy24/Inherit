const loginUser = require('../data/loginUser')
const bcrypt = require('bcrypt')

async function loginController(req,res) {
    let user = await new loginUser().getUser(req.body.name)
    let password = req.body.password
    const match = await bcrypt.compare(password, user.password);
    res.send(match)
}

module.exports = loginController