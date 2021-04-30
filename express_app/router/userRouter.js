const express = require('express');
const router = express.Router();
const registerController = require('../controller/registerController')
const loginController = require('../controller/loginController')
const logoutController = require('../controller/logoutController')
const selectProjectController = require('../controller/selectProjectController')
const validate = require('./validateRoute')

router.get('/',(req, res) => {
    res.send('user link')
})

router.post('/register', registerController)
router.post('/login', loginController)
router.post('/select', selectProjectController)

router.get('/logout', logoutController)

module.exports = router