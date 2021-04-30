const selectProject = require('../data/selectProject')
const jsonResponse = require('../JsonResponse')

async function selectProjectController(req,res) {
    let id = req.query.id;
    let project = req.query.project;
    let result = selectProject.add(id, project);
    console.log(result);
}

module.exports = selectProjectController