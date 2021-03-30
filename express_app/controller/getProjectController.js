const getProject = require('../data/getProjects')
const jsonResponse = require('../JsonResponse')

async function getProjectController(req,res) {
    let query = req.body.query
    let start = req.body.start
    let limit = req.body.limit
    
    if(typeof query === Object || query.languages === undefined) {
        res.send(jsonResponse("UNSUCCESSFUL", "Ill formed query"))
    }

    else {
        let projects = await new getProject().get(query, start, limit)

        if(projects === null) {
            res.send(jsonResponse("UNSUCCESSFUL","Something went wrong"))
        }
        else if(projects.length == 0) {
            res.send(jsonResponse("UNSUCCESSFUL","No matching projects found"))
        }
        else {
            res.send(jsonResponse("SUCCESSFUL", "Projects matching", projects))
        }
    }
}

module.exports = getProjectController