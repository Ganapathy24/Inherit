const projectUploader = require('../data/uploadProject')

async function projectUploadController(req, res) {
    const uploader = new projectUploader()
    let project = req.body
    let result = await uploader.upload(project)
    if(result == 1) {
        res.send("Sucessfully uploaded the project")
    }
    else {
        res.send("Project upload unsuccessful unsuccessful")
    }
}

module.exports = projectUploadController;