import getUser from "../data/getUser";
import jsonResponse from "../JsonResponse";

async function getUserController(req, res) {
    let studentID = req.query.studentID;

    let result = await new getUser().get(studentID);
    
    res.send(jsonResponse("SUCCESSFUL","User fetched successfully", result));
}

module.exports = getUserController;