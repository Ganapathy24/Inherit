const jsonResponse = require("../JsonResponse");

function logoutController(req, res) {
    req.session.destroy( err => {
        if(err) res.send(jsonResponse("UNSUCCESSFUL","Unable to log out"));
        res.send(jsonResponse("SUCCESSFUL","Successfully logged out"));
    });
}

module.exports = logoutController;