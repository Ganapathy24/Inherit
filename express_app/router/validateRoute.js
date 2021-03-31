const jsonResponse = require("../JsonResponse");

function validate(req, res, next) {
    if(req.session.user === undefined) {
        res.send(jsonResponse("DENIED", "Request denied"))
    }
    else {
        next()
    }
}

module.exports = validate