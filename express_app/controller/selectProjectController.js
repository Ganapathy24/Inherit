const selectProject = require('../data/selectProject')
const jsonResponse = require('../JsonResponse')

async function selectProjectController(req,res) {
    let id = req.body.id;
    let project = req.body.project;
    let result = await new selectProject().add(id, project);
    if(result.modifiedCount === 1){
        res.send(jsonResponse("SUCCESSFUL", "Project selected successfully"));
    }
    else {
        res.send(jsonResponse("UNSUCCESSFUL", "Project already selected"));
    }
}

module.exports = selectProjectController