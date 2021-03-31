const express = require('express');
const getProjectController = require('../controller/getProjectController');
const router = express.Router();
const projectUploadController = require('../controller/porjectUploadController')
const validate = require('./validateRoute')

router.get('/',(req, res) => {
    res.send('project link')
})

router.post('/upload', validate, projectUploadController)
router.get('/get', validate, getProjectController)

module.exports = router