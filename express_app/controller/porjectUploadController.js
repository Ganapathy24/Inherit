const projectUploader = require('../data/uploadProject')
const jsonResponse = require('../JsonResponse')

async function projectUploadController(req, res) {
    const uploader = new projectUploader()
    let project = req.body
    let result = await uploader.upload(project)
    if(result == 1) {
        res.send(jsonResponse("SUCCESSFUL","Sucessfully uploaded the project"))
    }
    else {
        res.send(jsonResponse("UNSUCCESSFUL","Project upload unsuccessful unsuccessful"))
    }
}

module.exports = projectUploadController;