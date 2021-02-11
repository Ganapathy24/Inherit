let express = require('express');
let router = express.Router();
let database = require('./dataBase')

router.get('/', async (req, res) => {
    const db = new database();
    let result = await db.addUser({name: "Ganapathy"});
    if(result == 1) {
        res.send("Sucessfully added a user")
    }
    else {
        res.send("Insertion unsuccessful")
    }
})

module.exports = router