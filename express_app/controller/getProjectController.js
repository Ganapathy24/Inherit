const getProject = require('../data/getProjects')

async function getProjectController(req,res) {
    let query = req.body.query
    let start = req.body.start
    let limit = req.body.limit
    let projects = await new getProject().get(query, start, limit)
    console.log(projects)
    res.send({'projects': projects})
}

module.exports = getProjectController