const express = require('express');
const router = express.Router();
const user = require('./userRouter')
const project = require('./projectRouter')

router.get('/', async (req, res) => {
    res.send('api route')
})

router.use('/users',user)
router.use('/projects',project)

module.exports = router