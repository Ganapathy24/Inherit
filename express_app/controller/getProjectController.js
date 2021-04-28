const getProject = require('../data/getProjects')
const jsonResponse = require('../JsonResponse')
const queryBuilder = require('../queryBuilder')

async function getProjectController(req, res) {
  let query = queryBuilder(req.body.query)
  console.log(query)
  let start = req.body.start
  let limit = req.body.limit

  let projects = await new getProject().get(query, start, limit)
  console.log(projects);

  if (projects === null) {
    res.send(jsonResponse("UNSUCCESSFUL", "Something went wrong"))
  } else if (projects.length == 0) {
    res.send(jsonResponse("UNSUCCESSFUL", "No matching projects found"))
  } else {
    res.send(jsonResponse("SUCCESSFUL", "Projects matching", projects))
  }
}

module.exports = getProjectController
